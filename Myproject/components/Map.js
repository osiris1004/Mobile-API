import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useRef , useEffect } from 'react'

const Map = () => {
    
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null) // like  a pointer
   

    // useEffect(() => { 
    //   if(!origin || !destination) return;
    
    //  return () => {
         
    //     mapRef.current.fitToSuppliedMarkers(["origin", "destination"],{
    //         edgePadding : {top: 50, right: 50, bottom: 50, left:50}
    //       } )
    //  }
    //  }, [origin, destination])
    
  return (
        <MapView
            ref ={mapRef} // point to the map
            style={tw`flex-1`}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                
            }}
        >
            {/* if my origin and destination is set then do the following */}
            { destination && (
                
                //console.log(origin.description) ,
            <MapViewDirections
                origin = {(origin.description)}
                destination = {{latitude: 48.937633459803514, longitude:  2.158003184739529}}
                //destination ={destination.description}
                apikey = {GOOGLE_MAPS_APIKEY}
                strokeWidth ={5}
                strokeColor="blue"
            >
            </MapViewDirections>   
            )}

        {origin?.location && (
        <Marker
            coordinate={
                {
                   latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
            title ="origin"
            description={origin.description}
            identifier="origin"    
            >
            </Marker>
        )}

        {destination?.location && (
        <Marker
            coordinate={
                {
                   latitude: destination.location.lat,
                    longitude: destination.location.lng,
                }}
            title ="Destination"
            description={destination.description}
            identifier="destination"    
            >
            </Marker>
        )}
        </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})