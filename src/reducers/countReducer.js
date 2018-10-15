// 计算 reducer

import {countActionsTypes} from '../constants/actionsTypes';

// 原始默认state
const defaultState = {
    count: 0,
    factor: 1
};


/**

 reduce 是纯函数，就是传递进去的值相同，返回的结果一定相同

 reduce拿到之前的数据，并且对之前的数据进行处理，返回一个新的数据给store

 reduce可以接收state，但是不可以修改state

 reduce其实是类似Android 订阅者模式，如 EventBus

 @param state 整个仓库的数据(store里面上一个存储的数据)
 @param actions 当前的操作(用户传过来的那句话)
 */
const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case countActionsTypes.INCREASE: {
            const newState = {...state};
            newState.count++;
            alert(action.type);
            return newState;
        }
        case countActionsTypes.DECREASE: {
            const newState = {...state};
            newState.count--;
            return newState;
        }
        case countActionsTypes.RESET: {
            const newState = {...state};
            newState.count = 0;
            return newState;
        }
        default:
        {
            // alert(action.type);
        }
    }
    return state;
};


export default countReducer