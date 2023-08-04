import { StyleSheet, Text, View, Image, Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'

const width = Dimensions.get('window').width

export default function RoomCard({ item, HandleModel }) {
    return (
        <TouchableOpacity style={[styles.Card, { backgroundColor: item.bgColor }]}
        onPress={()=>{HandleModel(true)}}
        >
            
            <View style={[styles.Container, { backgroundColor: item.bgImg }]}>
                <Image source={item.img} resizeMode='contain' />
            </View>

            <View style={{ margin: 15.5  }}>
                <Text style={styles.title}>{item.name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.title, { color: Colors.Pink }]}>{item.price}</Text>
                    <Text style={styles.subtitle}>/Day </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Card: {
        width: width / 2,
        height: width / 3.79,
        marginVertical: 16.5,
        padding: 22,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 25,
        shadowColor: "black",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.19,
        elevation:10,
    },
    Container: {
        borderRadius: 20,
        padding: 2,
    },
    title: {
        fontFamily: 'poppinsMedium',
        fontSize: 14,
    },
    subtitle: {
        fontFamily: 'poppinsMedium',
        fontSize: 12,
        color: Colors.gray
    }
})