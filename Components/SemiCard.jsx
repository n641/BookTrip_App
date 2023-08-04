import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../Constant/Colors'

export default function SemiCard({ children }) {
    return (
        <View style={styles.containerAbove}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerAbove: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 35,
        textShadowColor: Colors.shadowOfHeader,
        textShadowOffset: { width: 0, height: 5 },
        elevation: 0.5,
        overflow: 'hidden',
        justifyContent: 'space-evenly'
    },
   
})