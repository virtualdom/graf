import Promise from 'bluebird';
import Request from 'request-promise';

import { loading, notLoading } from './load';

const URL = 'http://api.graf.dominicjoseph.io';

exports.addGroup = (name, table) => ({ type: 'ADD_GROUP', payload: { name, table } });

exports.changeSelectedGroup = (groupName) => ({ type: 'CHANGE_GROUP', payload: groupName });

exports.update = (payload) => ({ type: 'UPDATE_GROUP', payload });

exports.add = (groupName) => {
  if (!groupName || !groupName.trim()) return;

  return function (dispatch, getState) {
    return Request({
      method: 'POST',
      url: `${URL}/groups`,
      json: true,
      body: {
        name: groupName
      },
      headers: {
        Authorization: getState().get('authHeader')
      }
    })
    .then(() => dispatch(exports.changeSelectedGroup(groupName)))
    .then(() => exports.fetchGroup(dispatch, getState));
  }
};

exports.change = (groupName) => {
  return function (dispatch, getState) {
    dispatch(exports.changeSelectedGroup(groupName));
    return exports.fetchGroup(dispatch, getState);
  }
};

exports.fetchGroup = (dispatch, getState) => {
  const selectedGroup = getState().get('selectedGroup');
  if (!selectedGroup || getState().get('groupTable').get(selectedGroup)) return;
  dispatch(loading());
  return Request({
    method: 'GET',
    url: `${URL}/groups/${selectedGroup}`,
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
    const table = {};
    for (var member in memberWorkouts) {
      table[member] = memberWorkouts[member].data;
    }
    return { groupName: selectedGroup, table };
  })
  .then((payload) => dispatch(exports.update(payload)))
  .then(() => dispatch(notLoading()));
};
