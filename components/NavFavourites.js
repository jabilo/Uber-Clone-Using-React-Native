import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux'
import { setDestination,setOrigin } from '../slices/navSlice'

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Chennai, Tamil Nadu, India",
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        destination:"BAngalore, Karnataka, India",
    },
];


const NavFavourites = () => {
    const dispatch = useDispatch();
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, {height:0.5}]}/>}
        renderItem={({item:{location,destination,icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                {/* onPress={() => dispatch(setOrigin({
                    location:location.text,
           
                }))} */}
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={20}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
  )}
    
    />

  )
}

export default NavFavourites

const styles = StyleSheet.create({})