import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import SemiCard from '../Components/SemiCard'
import Header from '../Components/Comp_BookingTour/Header'

import img from '../assets/completeImg.png'
import Colors from '../Constant/Colors'
import MasterCard from '../assets/MasterCardLogo.png'
import MainBtn from '../Components/Buttons/MainBtn'

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ComplateBooking({ navigation }) {
    return (
        <ScrollView style={{ flexGrow: 1, }}>
            <SemiCard style={{ height: height / 1.2 }}>
                <Header title={'Complate Booking'} navigation={navigation} />
                <Image source={img} style={{ alignSelf: 'center', margin: 30, width: 245, height: 178 }} />
                <Text style={styles.text1}>Thanks <Text style={{ color: Colors.Pink, fontFamily: 'poppinsSemiBold' }}>Jont Hennry! </Text></Text>
                <Text style={styles.text2}>Have a nice trip</Text>

                <View style={styles.card}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                        <LinearGradient
                            start={{ x: 2.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                            colors={['#D587F5', '#E0A5F9', '#EBC2FC']} style={styles.btn}>
                            <Image source={MasterCard} />
                        </LinearGradient>

                        <View>
                            <Text style={styles.title}> Personal   XXXX 1463</Text>
                            <Text style={styles.price}> $1700</Text>

                        </View>

                        <View
                            style={[styles.btn, { backgroundColor: 'white', width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }]}>
                            <AntDesign name="check" size={10} color="black" />
                        </View>

                    </View>
                </View>

            </SemiCard>

            <View style={{ alignSelf: 'center', justifyContent: 'center', height: height / 4.8 }}>
                <MainBtn navigation={navigation} title={'Complate'} width={width / 1.8} height={height / 14} onClick={() => { }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontFamily: 'poppinsRegular',
        fontSize: 18,
        alignSelf: 'center'
    },
    text2: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 36,
        color: Colors.purple,
        alignSelf: 'center'

    },
    card: {
        backgroundColor: '#FFEBF6',
        marginHorizontal: 20,
        // marginBottom: height / 5,
        borderRadius: 15,
        padding: 34
    },
    btn: {
        borderRadius: 25,
        padding: 10
    },
    title: {
        fontFamily: 'poppinsRegular',
        fontSize: 14
    },
    price: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 24,
        color: Colors.Pink
    }
})