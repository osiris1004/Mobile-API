import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { GOOGLE_MAPS_APIKEY } from '@env'

import {setOrigin, setDestination} from '../slices/navSlice'
import { useDispatch } from 'react-redux';

// * <SafeAreaView>  void your text to go on to the noche area 
const HomeScreen = () => {
    // dispashing is passing data in to the data layer

    const dispatch = useDispatch()
  return (
    <SafeAreaView> 
      
        <View style={tw`bg-red-600 border-2 p-5`}>
            <Image 
                style={
                    {
                        width: 100,
                        height:100,
                    }
                }
                source={
                    //passing an object
                    {
                        uri: 'https://lezebre.lu/images/detailed/83/48393-uber_logo.jpg',
                    }}

            >
            </Image>
            <GooglePlacesAutocomplete 
                    placeholder='where From'
                    styles={
                        {
                            container:{
                                flex: 0
                            },
                            textInput:{
                                fontSize: 18
                            }
                        }
                    }
                   nearbyPlacesAPI ="GooglePlacesSearch"

                   debounce = {400}

                   query={
                       {
                            key: GOOGLE_MAPS_APIKEY,
                           language:'en',
                           
                           
                       }
                   }
                   fetchDetails ={true}
                   enablePoweredByContainer = {false}

                   // fetch some information 
                   // detail include data such as coordinate 
                   onPress = {(data, details=null)=>{
                       dispatch(setOrigin(
                           {
                                location: details.geometry.location,
                                description: data.description
                           }))
                        
                        dispatch(setDestination(null))
                   }}
                   />
            
            <NavOptions></NavOptions>
        </View>

        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue"
    }
})
