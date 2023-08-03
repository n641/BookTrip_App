import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import img from '../assets/TripPhoto.png'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function CardOfTrip() {
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
    return (
        <View style={{ borderRadius: 15, marginVertical: 5 }}>
            <Image source={img} style={styles.Container} />
            <View style={styles.containerTexts}>
                <Text style={styles.title}>Hornborga</Text>
                <View style={styles.containerSubtitle}>
                    <View style={styles.containerLocation}>
                        <Entypo name="location-pin" size={16} color="white" />
                        <Text style={styles.Subtitle}>Stockholm, Sweden</Text>
                    </View>
                    <View style={styles.containerLocation}>
                        <AntDesign name="star" size={16} color="white" style={{ marginHorizontal: 5 }} />
                        <Text style={styles.Subtitle}>5.0</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: width - 50,
        height: height/4.9,
        alignSelf: 'center',
        borderRadius: 15
    },
    containerTexts: {
        position: 'absolute',
        left: width / 8,
        top: height/8.5
    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 20,
        color: 'white'
    },
    containerSubtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
    },
    Subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'white'
    },
    containerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    },
    containerRate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    }
})