import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Accueil",
        destination: "Paris, France"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Travail",
        destination: "La Défense, France"
    }

]

const NavFavourites = () => {

    
    return (
      // flatlist render item from a list
      <FlatList
        // data = { data array}
        data ={data}

        //each item in an data array is an item. see item like an array
        keyExtractor={(item)=>item.id}
        
        ItemSeparatorComponent = {()=>
        
            <View
            style={tw`bg-gray-200 h-1`}>
            </View>
        }
      
  
        // each item in an data array is an item, so what you are doing is looping through data array
        renderItem={({item: {location, destination, icon}})=>(
           
           <TouchableOpacity
           /* make use od my navigation i instantiated to navigate in a given screen */
            //onPress={() => navigation.navigate(item.screen)}
            //disabled = {!origin}
            style={tw`flex-row items-center p-5`}>

                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon} 
                    color='white' 
                    type='ionicon'
                    size={18}
                ></Icon>
                <View
                >
                    <Text
                        style={tw`font-semibold text-lg`}
                    >{location}</Text>
                    <Text
                        style={tw`text-gray-500`}
                    >{destination}</Text>

                </View>
             
           </TouchableOpacity>
          
        )}
      
      />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})

