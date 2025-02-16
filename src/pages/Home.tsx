import React from "react";
import { StyleSheet } from "react-native";
import Topbar from "../components/Topbar";
import { SafeAreaView } from "react-native-safe-area-context";

const homeStyle = StyleSheet.create({
    containerMain : {
        height: '100%',
        width: '100%',
        backgroundColor : '#151515'
    }
})

const Home : React.FC = () => {
    return (
        <SafeAreaView>
        <Topbar />
        </SafeAreaView>
    )
}

export default Home;