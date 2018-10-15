// 引入saga相关函数
import {call, put, takeEvery, takeLatest,take} from 'redux-saga/effects';
//
import {userActionsTypes} from '../constants/actionsTypes/index'

import {countActions} from '../actions/index'

function* fetchData() {
   try {
       while (true){
           // 阻塞式的调用
           const d = yield take("FETCH_REQUESTED")
           // alert("jddddia");
           // 相当于 dispatch 方法
           yield put({type:'INCREASE',data:"sjkdfjksjdfkj"});
       }
   }catch (e) {
       alert(e)
   }
}

function* watch() {

}

export {
    watch,
    fetchData
}