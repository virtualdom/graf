import { fetchGroup } from './groups.js';

const CHANGE_START_DATE = (newDate) => ({ type: 'CHANGE_START_DATE', payload: newDate });
const CHANGE_END_DATE = (newDate) => ({ type: 'CHANGE_END_DATE', payload: newDate });


export function changeStartDate (newDate) {
  return function (dispatch, getState) {
    dispatch(CHANGE_START_DATE(newDate));
    return fetchGroup(dispatch, getState);
  }
}

export function changeEndDate (newDate) {
  return function (dispatch, getState) {
    dispatch(CHANGE_END_DATE(newDate));
    return fetchGroup(dispatch, getState);
  }
}
