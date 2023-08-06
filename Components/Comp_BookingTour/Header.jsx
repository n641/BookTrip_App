import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Header({ navigation, title }) {
    return (

        <View style={styles.container}>

            <View style={{ flex: 1 / 2 }} >
                <Ionicons name="chevron-back" size={30} color="black" onPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack()
                    }
                }} />
            </View>

            <View >
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 15,
        marginTop: 20
    },
    title: {
        fontFamily: 'poppinsBold',
        fontSize: 20,
        textShadowColor: Colors.shadowOfHeader,
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 5,
        textAlign: 'center'
    }
})