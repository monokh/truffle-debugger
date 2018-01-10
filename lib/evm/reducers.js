import { combineReducers } from "redux";

import * as actions from "./actions";

export function callstack(state = [], action) {
  switch(action.type) {
    case actions.CALL:
      let address = action.address;
      return state + [ {address} ];

    case actions.CREATE:
      const binary = step.createBinary();
      return state + [ {binary} ];

    case actions.RETURN:
      return state.slice(0, -1); // pop

    default:
      return state;
  };
}

const evm = combineReducers({
  callstack
});

export default evm;