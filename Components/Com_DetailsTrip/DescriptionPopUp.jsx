import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'

import Modell from '../Modal'
import Colors from '../../Constant/Colors'
import OutlineBtn from '../Buttons/OutlineBtn'
import AddRateComponent from './AddRateComponent'
import CustomeTF from '../CustomeTF'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function DescriptionPopUp({ Description, setDescription }) {
    const [Desc, setDesc] = useState({
        description: "Lorem ipsum dolor sit amet, consectetur urna adipiscing elit, sed do eiusmod tempor eget commodo viverra maecenas accumsan lacus vel facilisis posuere.Suspendisse faucibus sed dolor eget posuere. Sed id interdum urna. Nam ac elit a ante commodo tristique. Condimentum a",
        facilities: [
            {
                icon: <FontAwesome name="free-code-camp" size={40} color={Colors.purple} />,
                name: 'Camping',
                desc: 'Tortor nec'
            },
            {
                icon: <Foundation name="mountains" size={40} color={Colors.purple} />,
                name: 'Mountains',
                desc: 'Placerat'
            },
            {
                icon: <MaterialCommunityIcons name="beach" size={40} color={Colors.purple} />,
                name: 'Beach',
                desc: 'Per inceptos'
            },
            
        ]
    })
    return (
        <Modell isModelOpen={Description} height={height / 2.1} width={width} justifyContent={'flex-start'} style={{ top: height / 2.7, justifyContent: 'space-around' }}  >
            <View style={{ justifyContent: 'space-evenly' , margin:5 }}>
                <View style={styles.line} />
                <Text style={[styles.Title]}>Description </Text>
                <Text style={styles.des}>{Desc.description}</Text>

                <FlatList
                    numColumns={2}
                    data={Desc.facilities}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: width / 2.3 }}>
                            {item.icon}
                            <View style={{ margin: 10 }}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.Subtitle}>{item.desc}</Text>
                            </View>
                        </View>
                    )}
                />

            </View>
        </Modell>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 4,
        width: 80,
        alignSelf: 'center',
        borderRadius: 15
    },
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
        color: Colors.purple,
        marginHorizontal: 15,
    },
    des: {
        fontFamily: 'poppinsRegular',
        fontSize: 14,
        color: 'gray',
        marginHorizontal: 15,
        margin: 10
    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 14,
        color: 'black'
    },
    Subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'gray'
    },
})