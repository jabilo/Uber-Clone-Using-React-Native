import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// redux is like a data layer in an app, where we can push data into that layer and use it in any component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function App() {
  
 
  return (
    <Provider store={store}>
     
        <NavigationContainer>
        <SafeAreaProvider style={styles.container}>

          <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="EatScreen" component={EatScreen} options={{headerShown:false,}}/>
          </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
        {/* <HomeScreen/> */}
      
      {/* <StatusBar style="auto" /> */}
  
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
