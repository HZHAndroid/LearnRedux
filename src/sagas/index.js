// 引入相关函数
import {call, put, takeEvery, takeLatest,take,fork} from 'redux-saga/effects';
//
import {userActionsTypes} from '../constants/actionsTypes/index'


import {watch, fetchData} from './userSaga'


export default function* rootSaga() {
    // yield takeEvery("FETCH_REQUESTED", fetchData);
    yield call(fetchData);
}