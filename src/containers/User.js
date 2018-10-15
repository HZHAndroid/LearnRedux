import React, {Component} from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, Button} from 'react-native'

class User extends Component {

    render() {
        return (
            <View>
                <Button title={"发送"} onPress={()=>{this.props.send()}}/>
            </View>
        )
    }

};

function mapStateToProps(state) {
    return {};
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        send() {
            dispatch({type:"FETCH_REQUESTED"})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);


const styles = StyleSheet.create({});
