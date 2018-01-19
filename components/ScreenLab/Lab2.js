import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Menu from '../Menu';

export default class Lab2 extends Component {
    constructor() {
        super();
        this.state = {
            label: "Example 1: Use State",
            label2: "Example 2: Use Props",
             value1: "Click me to show MY NAME",
            value2: "PS05854"
        };
    }
    static navigationOptions = {
        title: "Lab2"
    }

    _onPress() {
        this.setState({value1: " Nguyen Duc Thanh Tam"});
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.label}>
                        {this.state.label}
                    </Text>
                    <Text
                        onPress={this
                        ._onPress
                        .bind(this)}
                        style={styles.txt1}>
                        {this.state.value1}
                    </Text>
                    <Text
                        style={styles.txt2}
                        onPress1={this
                        ._onPress
                        .bind(this)}>
                        {this.state.value2}
                    </Text>
                </View>

                <View style1="style">
                    <Text style={styles.label}>
                        {this.state.label2}
                    </Text>

                   <UseProps insideText="Value 1"/ >
                   <UseProps insideText="Value 2"/ >
                   <UseProps insideText="Value 3"/ >
                   <UseProps insideText="Value 4"/ >
                   <UseProps insideText="Value 5"/ >
               
                </View>
            </View>
        );
    }
}

class UseProps extends Component {
    render() {
        return (
            <Text style={{
                fontWeight:'bold',
                fontSize: 20
            }}>
                {this.props.insideText}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    props2: {
        marginTop: 20
    },
    label: {
        color: 'red',
        fontSize: 30
    },
    label2: {},
    txt1: {
        fontSize: 20,
        color: "blue",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txt2: {
        textAlign: 'center'

    }
});