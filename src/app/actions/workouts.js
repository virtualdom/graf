import Moment from 'moment';
import Request from 'request-promise';

const URL = 'http://api.graf.dominicjoseph.io';

exports.update = (payload) => ({ type: 'UPDATE_WORKOUTS', payload });

export function checkIn () {
  return function (dispatch, getState) {
    const username = getState().get('username');
    const headers = {
      Authorization: getState().get('authHeader')
    };

    return Request({
      method: 'POST',
      url: `${URL}/workouts`,
      json: true,
      headers,
      qs: {
        start_date: Moment().startOf('week').toDate(),
        end_date: Moment().endOf('week').toDate()
      }
    })
    .then((response) => dispatch(exports.update(response.data)));
  }
}

export function uncheckIn () {
  return function (dispatch, getState) {
    const username = getState().get('username');
    const headers = {
      Authorization: getState().get('authHeader')
    };

    return Request({
      method: 'DELETE',
      url: `${URL}/workouts`,
      json: true,
      headers,
      qs: {
        start_date: Moment().startOf('week').toDate(),
        end_date: Moment().endOf('week').toDate()
      }
    })
    .then((response) => dispatch(exports.update(response.data)));
  }
}
