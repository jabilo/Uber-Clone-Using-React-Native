import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data =[
    {
        id:"Uber-X-123",
        title:"UberX",
        multiplier:1,
        image:"https://links.papareact.com/3pn",   
    },
    {
        id:"Uber-XL-456",
        title:"Uber XL",
        multiplier:1.2,
        image:"https://links.papareact.com/5w8",
    },
    {
        id:"Uber-LUX-789",
        title:"Uber LUX",
        multiplier:1.75,
        image:"https://links.papareact.com/7pf",
    },

];

const RideOptionsCard = () => {
    const CHARGE_RATE = 1.5;
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
   
    <SafeAreaView style={tw` flex-grow `}>
         <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("NavigateCard")}
                style={tw`top-3 left-0 flex-row z-50 rounded-full pl-5 pt-5 absolute `}
            >
                <Icon
                    name='chevron-left'
                    type='fontawesome'
                    color='black'
                />
            </TouchableOpacity>
            <Text style={tw`text-center pt-0 mt-0 flex-row py-5 text-xl `}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
         </View>
     
         <FlatList
          
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item:{id,title,multiplier,image},item}) =>(
                <TouchableOpacity 
                onPress={() => setSelected(item)} 
                style={tw`flex-row items-center justify-between px-10  ${id === selected?.id && "bg-gray-200"}`}>
                    <Image
                        style={{
                            width:70,
                            height:70,
                            resizeMode:"contain",
                        }}
                        source={{uri:image}}
                    />
                    <View>
                        <Text>{title}</Text>
                        <Text>{travelTimeInformation?.duration?.text}</Text>
                    </View>
                    <Text style={tw`text-xl`}>
                        {
                            new Intl.NumberFormat("en-gb",{
                                style:"currency",
                                currency:"INR",
                            }).format(
                                (travelTimeInformation?.duration.value * CHARGE_RATE * multiplier) / 10
                            )
                        }
                    </Text>

                </TouchableOpacity>
            )}
            
         />
          

         <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 mb-10 ml-5 mr-5 `}>
                <Text style={tw`text-center text-white text-xl`}>
                    Choose {selected?.title}
                </Text>
            </TouchableOpacity>
         </View>

    </SafeAreaView>
   
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})