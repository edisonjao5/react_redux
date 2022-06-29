import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

function actionTypesEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypesEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
  // switch (action.type) {
  //   case types.BEGIN_API_CALL:
  //     return state + 1;
  //   case types.API_CALL_ERROR:
  //     return state - 1;
  //   case types.END_API_CALL:
  //     return state - 1;
  //   default:
  //     return state;
  // }
}
