import { StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Modell from '../Components/Modal'
import MainBtn from '../Components/Buttons/MainBtn'

import img from '../assets/TripPhoto.png'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import DetailsCard from '../Components/Com_DetailsTrip/DetailsCard'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function TripDetails({ navigation }) {
    const [loved, setloved] = useState(true)
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />

            <ImageBackground source={img} style={styles.bg} resizeMode='cover'>
                <View style={styles.containerHeader} >
                    <Ionicons name="chevron-back" size={40} color="white" onPress={() => { navigation.goBack() }} />
                    <TouchableOpacity style={styles.containHeart} onPress={() => { setloved(!loved) }}>
                        <AntDesign name={loved ? "heart" : "hearto"} size={24} color={Colors.purple} />
                    </TouchableOpacity>
                </View>

                <View>
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

            </ImageBackground>

            <DetailsCard navigation={navigation} />

            <View style={styles.footer}>

                <View style={{ alignItems: 'center', marginHorizontal: 21 }}>
                    <Text style={styles.BtnTitle}>Total</Text>
                    <Text style={styles.Btnsubtitle}>$1250</Text>
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
    bg: {
        width: width,
        height: height / 2
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginHorizontal: 15
    },
    containHeart: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 35
    },

    containerTexts: {
        position: 'absolute',
        left: width / 15,
        top: height / 5.1
    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 24,
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

    BtnTitle: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
        color: Colors.gray
    },
    Btnsubtitle: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 24,
        color: Colors.Pink
    },
    footer: {
        height: height / 1.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        zIndex: -1
    }
})