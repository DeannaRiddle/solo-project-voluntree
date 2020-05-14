import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
//get events from New Events Form
function* getEvents(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("/api/events/", config);
    yield put({ type: "SET_EVENT_DATA", payload: response.data });
  } catch (error) {}
}

// post new events to Event Page
function* registerNewEvent(action) {
  try {
    yield axios.post("/api/events/", action.payload);
    yield put({ type: "GET_EVENTS_DATA" });
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
