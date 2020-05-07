import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // passes the username and password from the payload to the server
    yield axios.post("api/user/register", action.payload);

    // automatically log a user in after registration
    yield put({ type: "LOGIN", payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerNonProfit(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // call to nonprofit API route
    yield axios.post("/api/user/register/nonprofit", action.payload);

    // automatically log a user in after registration
    yield put({
      type: "LOGIN",
      payload: {
        username: action.payload.email,
        password: action.payload.password,
      },
    });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerVolunteer(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // call to nonprofit API route
    yield axios.post("/api/user/register/volunteer", action.payload);

    // automatically log a user in after registration
    yield put({
      type: "LOGIN",
      payload: {
        username: action.payload.email,
        password: action.payload.password,
      },
    });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registrationSaga() {
  yield takeLatest("REGISTER", registerUser);
  yield takeLatest("NONPROFIT_REGISTER", registerNonProfit);
  yield takeLatest("VOLUNTEER_REGISTER", registerVolunteer);
}

export default registrationSaga;
