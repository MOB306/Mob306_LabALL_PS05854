import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class Menu extends Component {
 
    static navigationOptions ={
        title: " Lab ps05854"
    }

    render() {
        var {navigate} = this.props.navigation;
        return (
            <View>
              <ButtonLab nameButton="1" onPress={()=>this.details("Lab2")}/>

              
            </View>
        );
    }

}

class ButtonLab extends Component {
    render() {
        return (
            <TouchableOpacity
               style={styleButton.btn}
               
               >
               <Text style={styleButton.text}>
                        Lab {this.props.nameButton}
                </Text>
              </TouchableOpacity>
                
        );
    }
}

const styleButton = StyleSheet.create({
    viewButtonRow:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    btn: {
        borderColor: '#0000CC',
        borderWidth: 3,
        margin:10,
        height:50,
        borderRadius: 20,
    },
    text:{
        fontSize: 30,
        textAlign:'center',
    }
});
