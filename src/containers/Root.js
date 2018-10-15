/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


import {countActions} from '../actions';

type Props = {};

class Root extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>{this.props.count}</Text>
                <View style={styles.countViewStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.increase()}>
                        <Text style={styles.countBtnStyle}>add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.decrease()}>
                        <Text style={styles.countBtnStyle}>less</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.reset()}>
                        <Text style={styles.countBtnStyle}>reset</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    componentDidMount() {
        this.props.dispatch(countActions.increase());
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    countViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    countBtnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'pink',
        marginLeft: 5,
    }
});

/**
 * 组件 和 store 连接的时候,
 * 将 store 数据 映射到 组件的 props
 * @param {*} state store中的所有数据
 */
const mapStateToProps = (state) => {
    return {
        count: state.countReducer.count
    }
};

/**
 * 组件 和 store 连接的时候,
 * 如果组件需要改变store数据，就需要调用 dispatch 方法
 * @param {*} dispatch
 */
const mapDispathToProps = (dispatch) => {
    return {
        dispatch,
        increase() {
            dispatch(countActions.increase());
        },
        decrease() {
            dispatch(countActions.decrease());
        },
        reset() {
            dispatch(countActions.reset());
        }
    }
};

// 如果 connect 加上了 mapDispathToProps，则 组件中 this.props.dispatch 无法使用
// 如果需要使用，则需要自己添加一个方法映射 dispatch
// 这里是创建跟 redux 的连接
export default connect(mapStateToProps, mapDispathToProps)(Root)
