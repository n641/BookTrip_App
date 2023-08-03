import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Constant/Colors'
import { Ionicons } from '@expo/vector-icons';


export default function Transportation() {
    const icons = [
        {
            status: 'bicycle',
            Key: 1
        },
        {
            status: 'car',
            Key: 2
        },
        {
            status: 'car',
            Key: 4
        },
        {
            status: 'train',
            Key: 5
        },
        {
            status: 'boat',
            Key: 6
        },
    ]
    const [Active, setActive] = useState(1)

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Select Transportation</Text>
            <Text style={styles.subtitle}>Choose transportation between Places</Text>
            <View style={styles.listTab}>
                {
                    icons.map((e) => (
                        <TouchableOpacity key={e.Key}
                            style={[styles.btn]}
                            onPress={() => { setActive(e.Key) }} >
                            {Active === e.Key ? <LinearGradient
                            start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.5}}
                            colors={['#EBC2FC', '#E0A5F9', '#D587F5']} style={styles.btn}>
                                <Ionicons name={e.status} size={30} color="gray" />
                            </LinearGradient>
                                :
                                <Ionicons name={e.status} size={30} color="gray" />

                            }
                        </TouchableOpacity>
                    ))

                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 21,
    },
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
    },
    subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: Colors.gray
    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: 18.5,
    },
    btn: {
        width: Dimensions.get('window').width / 9,
        height: Dimensions.get('window').width / 9,
        padding: 4,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,

    },
    textbtn: {
        fontSize: 14,
        fontFamily: 'poppinsRegular',
    },
    
})