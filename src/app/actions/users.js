import Moment from 'moment';
import Promise from 'bluebird';
import Request from 'request-promise';

import { loading } from './load';

const URL = 'http://api.graf.dominicjoseph.io';
const loginFail = (payload) => ({type: 'LOGIN_FAILURE', payload });
const loginSucceed = (payload) => ({type: 'LOGIN_SUCCEED', payload });

exports.logout = () => ({ type: 'LOG_OUT' });

export function signup (creds) {
  return function (dispatch) {
    dispatch(loading());
    return Request({
      method: 'POST',
      url: `${URL}/users`,
      body: creds,
      json: true
    })
    .then(() => dispatch(loginSucceed(creds)))
    .catch((error) => dispatch(loginFail(
      error.statusCode === 409 ?
        'Account already exists' :
        'Signup error occurred'
    )));
  }
}

export function login (creds) {
  return function (dispatch, getState) {
    dispatch(loading());
    return Request({
      method: 'GET',
      url: `${URL}/users/${creds.username}`,
      headers: {
        Authorization: `Basic ${btoa(`${creds.username}:${creds.password}`)}`
      }
    })
    .then(() => dispatch(loginSucceed(creds)))
    .then(() => dispatch(loading()))
    .then(() => {
      const username = getState().get('username');
      const startDate = Moment().startOf('week');
      const endDate = Moment().endOf('week');
      const headers = {
        Authorization: getState().get('authHeader')
      };

      return Promise.props({
        workouts: Request({
          method: 'GET',
          url: `${URL}/workouts/${username}`,
          qs: {
            start_date: Moment().startOf('week').toDate(),
            end_date: Moment().endOf('week').toDate()
          },
          json: true,
          headers
        }),
        lastWeek: Request({
          method: 'GET',
          url: `${URL}/workouts/${username}`,
          qs: {
            start_date: Moment().startOf('week').subtract(1, 'week').toDate(),
            end_date: Moment().endOf('week').subtract(1, 'week').toDate()
          },
          json: true,
          headers
        }),
        twoWeeksAgo: Request({
          method: 'GET',
          url: `${URL}/workouts/${username}`,
          qs: {
            start_date: Moment().startOf('week').subtract(2, 'weeks').toDate(),
            end_date: Moment().endOf('week').subtract(2, 'weeks').toDate()
          },
          json: true,
          headers
        }),
        threeWeeksAgo: Request({
          method: 'GET',
          url: `${URL}/workouts/${username}`,
          qs: {
            start_date: Moment().startOf('week').subtract(3, 'weeks').toDate(),
            end_date: Moment().endOf('week').subtract(3, 'weeks').toDate()
          },
          json: true,
          headers
        }),
        dailyquote: Request({
          method: 'GET',
          url: 'http://quotes.rest/qod.json?category=sports',
          json: true
        }),
        groupTable: Request({
          method: 'GET',
          url: `${URL}/groups`,
          json: true,
          headers
        })
      })
    })
    .then((responses) => {
      responses.workouts = responses.workouts.data;

      responses.chartData = [
        responses.threeWeeksAgo.data,
        responses.twoWeeksAgo.data,
        responses.lastWeek.data,
        responses.workouts,
      ];

      responses.dailyquote = {
        quote: responses.dailyquote.contents.quotes[0].quote,
        author: responses.dailyquote.contents.quotes[0].author
      };

      responses.groupTable = responses.groupTable.data.reduce((memo, val) => {
        memo[val.name] = null;
        return memo;
      }, {});

      responses.selectedGroup = Object.keys(responses.groupTable)[0] || '';

      return responses;
    })
    .then((responses) => {
      if (!responses.selectedGroup) return responses;

      return Request({
        method: 'GET',
        url: `${URL}/groups/${responses.selectedGroup}`,
        json: true,
        headers: {
          Authorization: getState().get('authHeader')
        }
      })
      .then((group) => {
        const memberPromises = {};

        group.members.forEach((member) => {
          if (member !== getState().get('username')) {
            memberPromises[member] = Request({
              method: 'GET',
              url: `${URL}/workouts/${member}`,
              qs: {
                start_date: getState().get('startDate'),
                end_date: getState().get('endDate')
              },
              headers: {
                Authorization: getState().get('authHeader')
              },
              json: true
            });
          }
        });

        return Promise.props(memberPromises);
      })
      .then((memberWorkouts) => {
        responses.groupTable[responses.selectedGroup] = {};
        for (var member in memberWorkouts) {
          responses.groupTable[responses.selectedGroup][member] = memberWorkouts[member].data;
        }
        return responses;
      });
    })
    .then((payload) => dispatch({ type: 'INIT', payload }))
    .catch((error) => dispatch(loginFail(
      error.statusCode === 401 ?
        'Login credentials invalid' :
        'Login error occurred'
    )));
  }
}
