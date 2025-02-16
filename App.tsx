import './gesture-handler';
import React from "react";
import { Text, View } from "react-native";
import FetchedText from "./src/components/FetchText.tsx";
import Topbar from "./src/components/Topbar.tsx";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home.tsx'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const mainStyle = StyleSheet.create({
  containerMain : {
    height: '100%',
    width: '100%',
    backgroundColor : '#151515'
  }
})

const App = () => {
  return (
    <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} />
   
      </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaView>
  )
}

export default App;