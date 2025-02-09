import React from "react";
import { Text, View } from "react-native";
import FetchedText from "./src/components/FetchText.tsx";
import Topbar from "./src/components/Topbar.tsx";
import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
  containerMain : {
    height: '100%',
    width: '100%',
    backgroundColor : '#222222'
  }
})

const App = () => {
  return (
  <View style={mainStyle.containerMain}>
    <Topbar />
  </View  >)
}

export default App;