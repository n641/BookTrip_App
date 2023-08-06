import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function ReviewCard({personImg , review, rate}) {
    const image = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    return (
        <View style={styles.conatiner}>
            <Image source={{ uri: personImg }} style={styles.img} />
            <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={styles.reviewtext}>{review}</Text>
                <View style={styles.containerRate}>
                    <AntDesign name="star" size={16} color="yellow" style={{ marginHorizontal: 5 }} />
                    <Text style={styles.Subtitle}>{rate}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin:10
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    reviewtext: {
        maxWidth: width - 130,
        fontFamily: 'poppinsMedium',
        fontSize: 14
    },
    containerRate: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})