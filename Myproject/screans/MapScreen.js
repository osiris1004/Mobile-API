import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import {createStackNavigator} from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';



const MapScreen = () => {
  const Stack = createStackNavigator()
  return (
    <View>
      <View style={tw`h-1/2`}>
          <Map></Map>
      </View>


      <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen 
                name="NavigateCard"  /* title of your screen */
                component = {NavigateCard} /* the name of the component you a rending  */
                options ={
                  {
                    headerShown: false
                  }}
                />


              <Stack.Screen 
                name="RideOptionCard"  /* title of your screen */
                component = {RideOptionCard} /* the name of the component you a rending  */
                options ={
                  {
                    headerShown: false
                  }}
                />    
          </Stack.Navigator>

          
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})