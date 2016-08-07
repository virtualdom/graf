import { List, Map } from 'immutable';
import Moment from 'moment';

const defaultState = Map({
  authHeader: '',
  username: '',
  loginError: null,
  startDate: Moment().startOf('week').toDate(),
  endDate: Moment().endOf('week').toDate(),
  workouts: 0,
  chartData: List([0, 0, 0, 0]),
  dailyquote: '',
  selectedGroup: '',
  groupTable: Map({})
});

function incrementWorkouts (state) {
  return state.update('workouts', (workouts) => workouts += 1)
    .update('chartData', (chartData) => chartData.update(3, (workouts) => workouts += 1));
}

function decrementWorkouts (state) {
  return state.update('workouts', (workouts) => workouts -= 1)
    .update('chartData', (chartData) => chartData.update(3, (workouts) => workouts -= 1));
}

function addGroup (state, newGroup) {
  return state.update('groupTable', (groupTable) => groupTable.set(newGroup, {}));
}

function changeGroup (state, newGroup) {
  return state.set('selectedGroup', newGroup);
}

function changeStartDate (state, newDate) {
  return state.set('startDate', newDate);
}

function changeEndDate (state, newDate) {
  return state.set('endDate', newDate);
}

function login (state, loginCreds) {
  return state.set('username', loginCreds.username).set('authHeader', btoa(`${loginCreds.username}:${loginCreds.password}`));
}

function signup (state, loginCreds) {
  return state.set('username', loginCreds.username).set('authHeader', btoa(`${loginCreds.username}:${loginCreds.password}`));
}

function logout (state) {
  return state.set('username', '').set('authHeader', '');
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_WORKOUT':
      return incrementWorkouts(state);
    case 'REMOVE_WORKOUT':
      if (state.get('workouts') > 0) return decrementWorkouts(state);
    case 'ADD_GROUP':
      return addGroup(state, action.payload);
    case 'CHANGE_GROUP':
      return changeGroup(state, action.payload);
    case 'CHANGE_START_DATE':
      return changeStartDate(state, action.payload);
    case 'CHANGE_END_DATE':
      return changeEndDate(state, action.payload);
    case 'SIGN_UP':
      return signup(state, action.payload);
    case 'LOG_IN':
      return login(state, action.payload);
    case 'LOG_OUT':
      return logout(state);
    default:
      return state;
  }
}
