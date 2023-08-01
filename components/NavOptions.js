import React from 'react'
import {Text,View,FlatList, TouchableOpacity,Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
const data = [
    {
        id:"123",
        title:"GEt a ride",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1660945726/assets/50/eb4a93-69b5-4306-b853-43578b7a9331/original/WORDMARK-12x.png",
        screen:"EatScreen",
    },
];

const NavOptions = () => {
const navigation = useNavigation();
const origin =  useSelector(selectOrigin);
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} disabled={!origin}>
                <View>
                    <Image
                    style={{width:120,height:120, resizeMode:"contain"}}
                    source={{uri:item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name='arrowright' color='white' type='antdesign'/>
                </View>
              
            </TouchableOpacity>
        )}
    />

  )
}

export default NavOptions
