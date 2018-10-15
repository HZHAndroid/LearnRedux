/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// 引入 redux 绑定库
import {Provider} from 'react-redux';
// 引入 store 的配置创建函数
import store from './src/stores'


import Root from './src/containers/Root'
import User from './src/containers/User'
import Demo from './src/components/NavigationDemo'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Demo/>
            </Provider>
        );
    }
}


