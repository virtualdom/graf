import { List, Map } from 'immutable';
import Moment from 'moment';

const defaultState = Map({
  authHeader: '',
  username: '',
  loading: false,
  loginError: null,
  startDate: Moment().startOf('week').toDate(),
  endDate: Moment().endOf('week').toDate(),
  workouts: 0,
  chartData: List([0, 0, 0, 0]),
  dailyquote: { quote: '"If at first you don\'t succeed, eat some ice cream!"', author: 'Dom' },
  selectedGroup: '',
  groupTable: Map({})
});

function nullifyGroups (state) {
  const keys = state.get('groupTable').keys();
  let key = keys.next();

  while (!key.done) {
    state = state.update('groupTable', (table) => table.set(key.value, null));

    key = keys.next();
  }

  return state;
}

function updateWorkouts (state, newCount) {
  return state.set('workouts', newCount)
    .update('chartData', (chartData) => chartData.set(3, newCount));
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
  return nullifyGroups(state).set('startDate', Moment(newDate).startOf('day').toDate());
}

function changeEndDate (state, newDate) {
  return nullifyGroups(state).set('endDate', Moment(newDate).endOf('day').toDate());
}

function updateGroupTable (state, payload) {
  return state.update('groupTable', (table) => table.set(payload.groupName, payload.table));
}

function load (state) {
  return state.set('loading', true).set('loginError', '');
}

function unload (state) {
  return state.set('loading', false);
}

function init (state, initializers) {
  return state.set('loading', false)
    .set('loginError', '')
    .set('workouts', initializers.workouts)
    .set('chartData', List(initializers.chartData))
    .set('dailyquote', initializers.dailyquote)
    .set('selectedGroup', initializers.selectedGroup)
    .set('groupTable', Map(initializers.groupTable));
}

function login (state, loginCreds) {
  return state.set('loading', false)
    .set('loginError', '')
    .set('username', loginCreds.username)
    .set('authHeader', `Basic ${btoa(`${loginCreds.username}:${loginCreds.password}`)}`);
}

function logout (state) {
  return defaultState;
}

function loginErr (state, message) {
  return state.set('loading', false).set('loginError', message);
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_WORKOUTS':
      return updateWorkouts(state, action.payload);
    case 'ADD_GROUP':
      return addGroup(state, action.payload);
    case 'CHANGE_GROUP':
      return changeGroup(state, action.payload);
    case 'CHANGE_START_DATE':
      return changeStartDate(state, action.payload);
    case 'CHANGE_END_DATE':
      return changeEndDate(state, action.payload);
    case 'UPDATE_GROUP':
      return updateGroupTable(state, action.payload);
    case 'LOAD':
      return load(state);
    case 'NOT_LOADING':
      return unload(state);
    case 'INIT':
      return init(state, action.payload);
    case 'LOG_OUT':
      return logout(state);
    case 'LOGIN_FAILURE':
      return loginErr(state, action.payload);
    case 'LOGIN_SUCCEED':
      return login(state, action.payload);
    default:
      return state;
  }
}
