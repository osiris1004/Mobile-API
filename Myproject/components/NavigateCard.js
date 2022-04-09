import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
    
            <Text style={tw`text-center py-5 text-xl`}>Good morning, Sonny</Text>
        
        <View
            style={tw`border-t border-gray-200 flex-shrink`}>
           
           <GooglePlacesAutocomplete 
                    placeholder='where To ?'
                    styles={ toInputBoxStyles}
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
                       dispatch(setDestination(
                           {
                                location: details.geometry.location,
                                description: data.description
                           }))

                        navigation.navigate('RideOptionCard')   
                        
                        dispatch(setDestination(null))
                   }}
                />

        </View>
      </SafeAreaView>
    
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop : 20,
        flex: 0
    },
    textInput:{
        backgroundColor: "gray",
        borderRadius: 0,
        fontSize: 0,
        color : "white"
        
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom : 0,

    }
})