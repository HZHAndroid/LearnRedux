import {createStore, applyMiddleware, compose} from 'redux'

//引入异步操作
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

//引入所有的reducers,切记要在index.js封装下(这里已经是合并后的结果，所以可以直接用来创建 store)
import reducers from '../reducers'
// 引入redux-saga中的 createSagaMiddleware 函数
import createSagaMiddleware from 'redux-saga';
// 引入基础的 saga
import  rootSaga from '../sagas'

// 执行createSagaMiddleware 函数
const sagaMiddleware = createSagaMiddleware();

// 定义一个数组存储中间件
const middlewares = [thunk, createLogger,sagaMiddleware];

const configureStore = (initialState) => {
    /**
     reducers : 是多个 reduce合并后的结果
     initialState : 初始化默认值
     compose: 中间件
     */

    // 创建 store
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middlewares)
        )
    );
};

//创建store
const store = configureStore();

// 执行基础的 saga generator 函数
sagaMiddleware.run(rootSaga);

//配置store信息
export default store
