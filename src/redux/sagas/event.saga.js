import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
//get events from New Events Form
function* getEvents(action) {
  try {
    // yield put({ type: "LOGIN", payload: action.payload });
  } catch (error) {}
}

// post new events to Event Page
function* registerNewEvent(action) {
  try {
    yield axios.post("/api/events/", action.payload);

    // yield put({
    //   type: "NEW_EVENT",
    //   payload: {},
    // });

    // yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with posting event:", error);
    // yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* eventSaga() {
  yield takeLatest("GET_EVENTS_DATA", getEvents);
  yield takeLatest("POST_NEW_EVENT", registerNewEvent);
}

export default eventSaga;
