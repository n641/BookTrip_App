import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

import MapView, { Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import Modall from '../Components/Modal';
import Colors from '../Constant/Colors';
import img from '../assets/TripPhoto.png'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import MainBtn from '../Components/Buttons/MainBtn';

export default function MapPopUp({ navigation }) {

    const [locations, setlocations] = useState([
        {
            cordinate: {
                latitude: 37.79825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            title: 'Activity',
            datefrom: '12:00 Am',
            dateTo: '5:00 Pm',
            image: img

        },
        {
            cordinate: {
                latitude: 37.82335,
                longitude: -122.4624,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            title: 'Activity',
            datefrom: '12:00 Am',
            dateTo: '5:00 Pm',
            image: img

        },
        {
            cordinate: {
                latitude: 37.79445,
                longitude: -122.4424,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            title: 'Activity',
            datefrom: '12:00 Am',
            dateTo: '5:00 Pm',
            image: img
        },
        {
            cordinate: {
                latitude: 37.81445,
                longitude: -122.4554,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            title: 'Activity',
            datefrom: '12:00 Am',
            dateTo: '5:00 Pm',
            image: img
        }

    ])





    return (
        <View style={{ justifyContent: 'flex-end', height: height }}>

            <MapView
                style={{ width: width, height: height - 120, borderRadius: 25 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >


                {
                    locations.map((item, index) => (
                        <Marker
                            key={index}
                            coordinate={item.cordinate}
                            title={"item.hotelName"}
                            description={"item.description"}
                            pinColor={Colors.purple}
                        >

                            <Callout tooltip >
                                <View style={{
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 15,
                                    padding: 10,
                                    justifyContent: 'space-around',
                                }}>

                                    <Image source={img} style={{ width: 70, height: 70, borderRadius: 25 }} />
                                    <View style={{ justifyContent: 'space-evenly' }}>
                                        <Text style={[styles.Title, { color: 'black', fontSize: 13 }]}>{item.title}</Text>
                                        <View style={{ alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[styles.Title, { fontSize: 13 }]}>from </Text>
                                                <Text style={[styles.Title, , { fontSize: 13 }]}>{item.datefrom} </Text>
                                                <Text style={[styles.Title, , { fontSize: 13 }]}>to </Text>
                                                <Text style={[styles.Title, , { fontSize: 13 }]}>{item.dateTo} </Text>
                                            </View>
                                            <MainBtn title={'onTime'} width={120} height={30} style={{ fontSize: 10, padding: 0 }} />
                                        </View>
                                    </View>

                                </View>
                            </Callout>

                        </Marker>
                    )
                    )
                }

                {/* <MapViewDirections
                    origin={{
                        latitude: 37.82335,
                        longitude: -122.4624,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    destination={{
                        latitude: 37.81445,
                        longitude: -122.4554,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                // apikey={GOOGLE_MAPS_APIKEY}
                /> */}

            </MapView>


            <View style={styles.footer}>

                <View style={{ alignItems: 'center', marginHorizontal: 21 }}>
                    <Text style={styles.Title}>Total</Text>
                    <Text style={styles.subtitle}>$1250</Text>
                </View>

                <View>
                    <MainBtn onClick={() => {
                        navigation.navigate('ConfirmBookingScreen')
                    }}
                        navigation={navigation} title={'Confirm'} width={width / 2.5} height={height / 13.2} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
        color: Colors.gray
    },
    subtitle: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 24,
        color: Colors.Pink
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        // top:height-80
    }
})