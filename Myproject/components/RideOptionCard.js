import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
      id: "uber-x-1234",
      title: "redcat-studio X",
      multiplier: 1,
      image: 'https://www.pngmart.com/files/5/Mercedes-Benz-PNG-Transparent.png',
      screen: "MapScreen", // the screen it should go to
  },
  {
    id: "uber-xl-456",
    title: "redcat-studio XL",
    multiplier: 1,
    image: 'https://www.pngmart.com/files/5/Mercedes-Benz-PNG-Transparent.png',
    screen: "MapScreen", // the screen it should go to
}

 

]

const RideOptionCard = () => {

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  return (
    <SafeAreaView style={tw`bg-white flex-grow `}>
        <View>
          <TouchableOpacity 
              onPress={ () => navigation.navigate("NavigateCard")}
              style={tw`left-1 flex-row pt-0`}>
            <Icon 
              name ="chevron-left" type ="fontawesome"
            >
            </Icon>
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl`}>
              Select a ride 
          </Text>
          <FlatList

                  keyExtractor={(item)=>item.id}

                  // data = { data array}
                    data ={data}

                    // each item in an data array is an item, so what you are doing is looping through data array
                    renderItem={({item: {id, title, multiplier, image}, item})=>(
                      
                      <TouchableOpacity 
                      // when you press one of those row will set or store the selected item to item: {id, title, multiplier, image}
                        onPress={ ()=> setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}> 
                          <Image
                            style={{
                              width:100,
                              height: 100,
                              resizeMode: "contain"
                            }}
                            source = {{uri: image}}
                          >

                          </Image>
                          <View style={tw`-ml-6`}>
                              <Text style={tw`text-xl font-semibold`}>{title}</Text>
                              <Text>Travel tile..</Text>
                          </View>
                          <Text style={tw`-ml-6`}>3</Text>

                      </TouchableOpacity>
                      
                    )}

                  />

                  <View>
                    <TouchableOpacity disabled ={!selected} style={tw`bg-gray-500  py-3 m-3 ${
                      !selected && 'bg-white '
                    }`}>
                    
                        <Text style={tw`text-center text-white text-xl ${
                      !selected && 'border text-black' }`}>
                           Choose {selected?.title}
                        </Text>
                    
                    </TouchableOpacity>
                  </View>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})