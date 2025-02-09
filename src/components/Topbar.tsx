import React from "react";
import { View, StyleSheet } from "react-native";

import { Pressable } from "react-native";

const topbarStyleSheet = StyleSheet.create({
    container : {
        width: '100%',
        height: '8%',
        backgroundColor: '#111111',
        borderBottomWidth : 1,
        borderBottomColor : '#000000'
    },
});

const Topbar = () => {

    return (
        <View style={topbarStyleSheet.container}>
            
        </View>
    )
}

export default Topbar;