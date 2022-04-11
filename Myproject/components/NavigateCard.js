import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
      <View style={tw`bg-white`}>
    
        <Text style={tw`text-center text-xl pt-3 pb-2`}>Bonjour,</Text>
        
        <View
            style={tw`border-0 border-gray-200 `}>
           
                <GooglePlacesAutocomplete 
                    placeholder='où aller ?'
                    styles={ toInputBoxStyles }
                   nearbyPlacesAPI ="GooglePlacesSearch"
                   disableScroll={false}
                   keyboardShouldPersistTaps='always'

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
        <NavFavourites></NavFavourites>
        
        <View style={tw`flex flex-row justify-evenly mt-auto py-2 border-t border-gray-200`}>
            <TouchableOpacity
                onPress={()=> navigation.navigate("RideOptionCard")}
                style={tw`flex flex-row bg-black w-28 px-4 py-3 rounded-full justify-between`}
            >
            <Icon
                    
                    name="car" 
                    color='white' 
                    type='font-awesome'
                    size={16}
                    style={tw`pr-2`}
                >

                </Icon>
                <Text
                        style={tw`text-white text-center`}
                    >
                        un tour

                    </Text>
            </TouchableOpacity>
        </View>
      </View>
    
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 0,
       
    },
    textInput:{
        backgroundColor: "lightgray",
        borderRadius: 0,
        color : "white"
        
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom : 0,

    }
})