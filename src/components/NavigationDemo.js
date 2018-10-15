import React from 'react';
import {connect} from 'react-redux'
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    this.onClick()
                }}>
                    <Text>Settings!</Text>
                </TouchableOpacity>
            </View>

        );
    }

    onClick() {
        alert("sdfsdf");
        this.props.navigation.navigate('DetailScreen');
    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>DetailScreen!</Text>
            </View>
        );
    }
}

/**
 * 创建 底部导航
 */
const bottom = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});
/**
 * 创建导航
 * 注意：将底部导航放在 导航中，就可以不必要控制底部导航的显跟隐藏
 * 反之，将导航包含在底部导航中，要一直控制显示跟隐藏，非常麻烦。
 * bottom : 是页面的名称,标志
 * screen: bottom 是指定页面的名称/标志对应的页面
 */
const demo = createStackNavigator({
    bottom: {
        screen: bottom
    },
    DetailScreen: {
        screen: DetailScreen
    },

});

function mapStateToProps(state) {
    return {};
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(demo);