import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screans/HomeScreen';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screans/MapScreen';



//<NavigationContainer> enable the navigation between pages
export default function App() {
  const Stack = createStackNavigator() 
  return (
   
    <Provider store={store}>
        <NavigationContainer>  
            <SafeAreaProvider>
              <KeyboardAvoidingView
                  behavior = {Platform.OS === "iso" ? "padding" : "height"}
                  style={
                    {flex: 1}
                  }
                  
                  keyboardVerticalOffset = {Platform.OS == "ios" ? -4: 0}
              >
                <Stack.Navigator>
                  <Stack.Screen 
                  name="HomeScreen"  /* title of your screen */
                  component = {HomeScreen} /* the name of the component you a rending  */
                  />

                <Stack.Screen 
                  name="MapScreen"  /* title of your screen */
                  component = {MapScreen} /* the name of the component you a rending  */
                  />
                </Stack.Navigator>
              </KeyboardAvoidingView>
             
             
            </SafeAreaProvider>
        </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

