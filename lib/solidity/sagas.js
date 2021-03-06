import debugModule from "debug";
const debug = debugModule("debugger:solidity:sagas");

import { call, put, take, select } from "redux-saga/effects";

import { TICK } from "lib/trace/actions";
import evm from "lib/evm/selectors";

import * as actions from "./actions";
import solidity from "./selectors";

function* functionDepthSaga () {
  while (true) {
    yield take(TICK);
    debug("got TICK");
    let instruction = yield select(solidity.next.instruction);
    debug("instruction: %o", instruction);

    if (yield select(evm.next.step.isJump)) {
      let jumpDirection = yield select(solidity.next.jumpDirection);


      yield put(actions.jump(jumpDirection));
    }
  }
}


export default function* saga () {
  yield call(functionDepthSaga);
}
