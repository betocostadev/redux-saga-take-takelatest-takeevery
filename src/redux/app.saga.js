// take will fire only once
// takeEvery will run all the time, like looping the other function it calls
// takeLatest as the name says, will get only the latest result. It is used like in
// an async call where you can get more than one result. Like using the delay.
// delay is like a setTimeout for Sagas
// import { take, takeEvery, takeLatest, delay, put } from 'redux-saga/effects'
import { takeLatest, delay, put } from 'redux-saga/effects'

// Now it will delay 2.5 seconds, but even if we click 10 times within these seconds
// it will add only 1, because it will only... takeLatest!
export function* onIncrement() {
  yield console.log('I am incremented')
  yield delay(2500)
  yield put({ type: 'INCREMENT_FROM_SAGA' })
}

export function* incrementSaga() {
  yield takeLatest('INCREMENT', onIncrement)
}


/* export function* onIncrement() {
  yield console.log('I am incremented')
}

export function* incrementSaga() {
  // const incrementPayload = yield take('INCREMENT')
  yield delay(2000)
  yield takeEvery('INCREMENT', onIncrement)
  console.log('Increment Saga runs after 2 seconds')
} */

/* export function* incrementSaga() {
  // const incrementPayload = yield take('INCREMENT')
  yield take('INCREMENT')
  console.log('increment from saga')
} */
