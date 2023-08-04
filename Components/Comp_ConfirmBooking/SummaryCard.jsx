import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import img from '../../assets/TripPhoto.png'

export default function SummaryCard() {
    return (
        <View style={styles.card}>

            <Image source={img} style={{ width: 90, height: 80, borderRadius: 15 }} />

            <View style={{ margin: 10 }}>
                <Text style={styles.title}>Hornborga</Text>
                <View style={styles.containerSubtitle}>
                    <View style={styles.containerLocation}>
                        <Entypo name="location-pin" size={16} color="gray" />
                        <Text style={styles.Subtitle}>Stockholm, Sweden</Text>
                    </View>
                </View>

                <View style={styles.containerDate}>
                    <MaterialIcons name="date-range" size={20} color="gray" />
                    <Text style={styles.Subtitle}> From:</Text>
                    <Text style={[styles.Subtitle, { color: Colors.purple }]}> 09 july</Text>
                    <Text style={styles.Subtitle}> To:</Text>
                    <Text style={[styles.Subtitle, { color: Colors.purple }]}> 12 july</Text>
                </View>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 8, height: 10 },
        shadowOpacity: 0.1,
        elevation: 12,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 20,
        color: 'black'
    },
    containerSubtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
    },
    Subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'gray'
    },
    containerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    },
    containerDate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
})