// 定义计算的 actions ，其中每一个action 中type是必须的
/*
如：export const increase = () => {
    type: countActionsTypes.INCREASE
};
* */

import {countActionsTypes} from '../constants/actionsTypes'


export const increase = () => ({
    type: countActionsTypes.INCREASE
});

export const decrease = () => ({
    type: countActionsTypes.DECREASE
});

export const reset = () => ({
    type: countActionsTypes.RESET
})