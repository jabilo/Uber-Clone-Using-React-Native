import React, { useDebugValue } from 'react'
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env";
import { color } from 'react-native-elements/dist/helpers'
import { useDispatch } from 'react-redux'
import { setDestination,setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'
console.log(GOOGLE_MAPS_APIKEY);
const  HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView>
        {/* <Text style={[tw`text-red-500 p-10`, styles.text]}>I am home screen</Text> */}
        <View style={tw`p-5`}>
            <Image
                style={{
                    width:100,
                    height:100,
                    resizeMode:"contain",
                }}
                source={{
                    uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where From ?'
                styles={{
                    container:{
                        flex:0,
                    },
                    textInput:{
                        fontSize:18,
                    },
                    
                }}
                onPress={(data,details = null) => {
                    console.log('data : ', data);
                    console.log('details : ',details);
                    dispatch(setOrigin({
                        location:details.geometry.location,
                        description:data.description
                    }));
                    dispatch(setDestination(null))
                    console.log('data : ', data);
                    console.log('details : ',details);
                    
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                query={{key:GOOGLE_MAPS_APIKEY,
                language:"en",}}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />

            <NavOptions/>
            <NavFavourites/>
        </View>
        
    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:'blue',
    }
})