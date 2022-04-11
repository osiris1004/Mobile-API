import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { GOOGLE_MAPS_APIKEY } from '@env'

import {setOrigin, setDestination} from '../slices/navSlice'
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

// * <SafeAreaView>  void your text to go on to the noche area 
const HomeScreen = () => {
    // dispashing is passing data in to the data layer

    const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`flex`}> 
      
        <View style={tw`bg-white p-5 h-full `}>
            <Image 
                style={
                    {
                        width: 50,
                        height:50,
                        
                    }
                }
                source={
                    //passing an object
                    {
                        uri: 'https://redcat-studio.fr/logo.png',
                    }}

            >
            </Image>
            <GooglePlacesAutocomplete 
                    placeholder='d où'
                    styles={
                        {
                            container:{
                                flex: 0,
                                paddingTop:20,
                                borderBottomWidth: 2,
                                borderColor: "lightgray"

                                
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

            <NavFavourites></NavFavourites>
        </View>

        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})



