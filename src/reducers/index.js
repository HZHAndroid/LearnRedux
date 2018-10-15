// 所有 redux 的 reduce 的入口,在这里将合并多个 reduce，再传递出去给 store

import {combineReducers} from 'redux'

import countReducer from './countReducer';

// 合并多个 reducer
export default combineReducers({
    countReducer
})