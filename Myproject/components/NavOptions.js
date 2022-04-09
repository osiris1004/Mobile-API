import { FlatList, Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
//import { useNavigation } from '@react-navigation/native';

 


const data = [
    {
        id: "1",
        title: "get a ride",
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80',
        screen: "MapScreen", // the screen it should go to
    },
    {
        id: "2",
        title: "Order food",
        image: 'https://www.docteur-lequere.fr/images/junk-food.jpg',
        screen: "EatsScreen"
    },

]
 

  
  
const NavOptions = () => {
  const origin = useSelector(selectOrigin)

  const navigation = useNavigation()
  return (
    // flatlist render item from a list
    <FlatList

    keyExtractor={(item)=>item.id}

    // data = { data array}
      data ={data}
      horizontal

      // each item in an data array is an item, so what you are doing is looping through data array
      renderItem={({item})=>(
         
         <TouchableOpacity 
         /* make use od my navigation i instantiated to navigate in a given screen */
          onPress={() => navigation.navigate(item.screen)}
          //disabled = {!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
           <View
              style={tw`${!origin && "opacity-20"}`}
              >
             <Image
                
             style={
               {
                 width:123,
                 height: 123
               }}

             source = {
               {
                  uri: item.image
               }}
              />

             
            <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
            <Icon 
              style={tw`p-2 rounded-full w-10 mt-4 bg-black`}
              name='caretright' color='white' type='antdesign'/>

         
           </View>
         </TouchableOpacity>
        
      )}
    
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})