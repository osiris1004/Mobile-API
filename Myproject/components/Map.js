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
    const mapRef = useRef(null)
    const isMounted = useRef(true)

    useEffect(() => { 
      if(!origin || !destination) return;
    
     return () => {
        isMounted.current = false
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"],{
            edgePadding : {top: 50, right: 50, bottom: 50, left:50}
          } )
     }
     }, [origin, destination])
    
  return (
        <MapView
            ref ={mapRef}
            style={tw`flex-1`}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                
            }}
        >
            {/* if my origin and destination is set then do the following */}
            {origin && destination && (
                <MapViewDirections
                    origin = {{latitude: 37.3318456, longitude: -122.0296002}}
                    destination ={{latitude: 37.3318456, longitude: -122.0296002}}
                    apikey = {GOOGLE_MAPS_APIKEY}
                    strokeWidth ={3}
                    strokeColor="red"
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
        </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})