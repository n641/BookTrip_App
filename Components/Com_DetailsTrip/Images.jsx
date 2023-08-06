import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'

export default function Images() {
    const images = [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80']
    return (
        <View style={styles.container}>
            {
                images.map((e, i) => (
                    <View key={i} style={[styles.containerImg]}>
                        <Image style={styles.img} source={{ uri: e }} />
                    </View>
                ))
            }
            <View style={[styles.containerImg, { backgroundColor: Colors.lightBlue }]}>
                <View style={[styles.img, { backgroundColor: Colors.lightBlue, alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={{ fontSize: 18, color: 'white' }}>68+</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    containerImg: {
        backgroundColor: 'black',
        padding: 2,
        borderRadius: 25,
        marginRight: -10
    },
    img: {
        width: 36,
        height: 36,
        borderRadius: 25,

    }
})