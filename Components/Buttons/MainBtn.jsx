import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'

export default function MainBtn({ navigation, title, width, height, onClick , style }) {
    return (
        <TouchableOpacity style={[styles.containerBtn, { width: width, height: height }, style]}
            onPress={onClick}
        >
            <Text style={[styles.title , style]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        backgroundColor: Colors.purple,
        padding: 15,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 14,
        color: "white",
        textAlign: 'center'
    },
})