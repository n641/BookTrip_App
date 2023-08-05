import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

import Dash from 'react-native-dash';
import Card from '../Comp_Memmories/Card'

import Colors from '../../Constant/Colors';
import TripPhoto2 from '../../assets/TripPhoto2.png'

import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Dot = ({ children, showline }) => (
    <View style={{ alignItems: 'center' }}>
        <View style={styles.ConatinerImage}>
            {children}
        </View>
        {showline && <Dash style={{ width: 1, height: height / 5, flexDirection: 'column', marginVertical: 2 }} dashColor={Colors.shadowOfHeader} />}
    </View>
)


export default function Plan() {
    return (
        <View style={{ alignItems: 'center' , marginTop:70 }}>

            <View style={styles.containerblock}>
                <Dot showline={true}>
                    <Entypo name="camera" size={24} color="black" />
                </Dot>
                <View style={{ alignItems: 'center' }}>
                    <Card title={'Title here'} time={'10:00'} bg={Colors.lightPink}>
                        <Image source={TripPhoto2} resizeMode='contain' />
                    </Card>
                </View>
            </View>

            <View style={styles.containerblock}>
                <Dot showline={true}>
                    <Foundation name="web" size={24} color="gray" />
                </Dot>
                <View style={{ alignItems: 'center' }}>
                    <Card title={'Website Link'} time={'11:00'} bg={Colors.lightPink}>
                        <Text style={styles.title}>WWW.google.com</Text>
                    </Card>
                </View>
            </View>

            <View style={styles.containerblock}>
                <Dot showline={true}>
                    <Entypo name="location-pin" size={24} color="red" />
                </Dot>
                <View style={{ alignItems: 'center' }}>
                    <Card title={'Show in Map'} time={'12:00'} bg={Colors.lightBlue}>
                        <Text style={styles.title}>Open in Map</Text>
                    </Card>
                </View>
            </View>

            <View style={styles.containerblock}>
                <Dot>
                    <Ionicons name="md-receipt-outline" size={24} color="black" />
                </Dot>
                <View style={{ alignItems: 'center' }}>
                    <Card title={'Title here'} time={'10:00'} bg={Colors.lightPink}>
                    <Ionicons name="md-receipt-outline" size={25} color="black" />
                    </Card>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ConatinerImage: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 25,
    },
    containerblock: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'poppinsMedium',
        fontSize: 12,
        color: 'gray'
    }
})