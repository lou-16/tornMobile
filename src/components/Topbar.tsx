import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Pressable } from "react-native";

const topbarStyleSheet = StyleSheet.create({
    container : {
        width: '100%',
        height: 'auto',
        backgroundColor: '#111111',
        borderBottomWidth : 1,
        borderBottomColor : '#000000',
        minHeight : '8%'
    },
    text:{
        color : '#aaaaaa',
        fontFamily : 'Montserrat',
        fontSize : 40 ,
        alignSelf : 'center',
        marginTop : 2
    }
});

const Topbar = () => {

    return (
        <View style={topbarStyleSheet.container}>
            
            <Text style={topbarStyleSheet.text}>
                Torn
            </Text>
        </View>
    )
}

export default Topbar;