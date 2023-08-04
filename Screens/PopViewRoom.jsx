import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

import Modall from '../Components/Modal'
import OutlineBtn from '../Components/Buttons/OutlineBtn'
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import image from '../assets/TripPhoto.png'
import Colors from '../Constant/Colors';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function PopViewRoom({ isModelOpen, HandleModel, navigation }) {
    return (
        <View  >
            <Modall isModelOpen={isModelOpen} HandleModel={HandleModel} height={height / 1.2} width={width} justifyContent={'flex-start'} >

                <View style={{
                    justifyContent: 'space-evenly',
                }} >

                    <View style={styles.line} />

                    <View style={styles.Header}>
                        <Text style={styles.title}>Luxury Room</Text>
                        <View style={styles.containerRating}>
                            <AntDesign name="star" size={16} color="yellow" style={{ marginHorizontal: 8 }} />
                            <Text style={styles.Subtitle}>5.0</Text>
                        </View>
                    </View>

                    <View>
                        <Image
                            source={image}
                            style={{ alignSelf: 'center', margin: 19.7, borderRadius: 25, height: 250, width: 330 }}
                        />
                    </View>

                    <View style={styles.CotainerDes}>
                        <View style={{ alignItems: 'center' }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                colors={['#EBC2FC', '#E0A5F9', '#D587F5']} style={styles.btn}>
                                <Ionicons name="person" size={18} color="white" />
                            </LinearGradient>
                            <Text style={styles.subTitle}>4 Guests</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                colors={['#FFA183', '#FF825A', '#FF6331']} style={styles.btn}>
                                <FontAwesome5 name="bed" size={18} color="white" />
                            </LinearGradient>
                            <Text style={styles.subTitle}>2 Bedrooms</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                colors={['#F9B812', '#FCCB4C', '#FFDD86']} style={styles.btn}>
                                <FontAwesome name="bathtub" size={18} color="white" />
                            </LinearGradient>
                            <Text style={styles.subTitle}>1 Bath</Text>
                        </View>

                    </View>

                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={styles.Summary}>
                            Summer Radiant Flat with a
                            Charming Roof Balcony
                        </Text>

                        <Text style={styles.desSummary}>
                            Lorem ipsum dolor sit amet, consectetur urna
                            adipiscing elit, sed do eiusmod tempor eget
                            commodo viverra maecenas accumsan.
                        </Text>

                    </View>

                    <View style={styles.footer}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.title2, { color: Colors.Pink }]}>$580</Text>
                            <Text style={styles.subtitle2}>/Day </Text>
                        </View>

                        <View>
                            <OutlineBtn navigation={navigation} title={'Add to Trip'} width={width / 4} height={45}
                                onClick={() => {
                                    HandleModel(false)
                                }} />
                        </View>

                    </View>

                </View>

            </Modall>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 4,
        width: 80,
        alignSelf: 'center',
        borderRadius: 15
    },
    title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 20,
        color: 'black'
    },
    RateText: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'gray'
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 19.5
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    CotainerDes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        alignItems: 'center'
    },
    btn: {
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    subTitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: '#5B4DBC',
        marginTop: 5,
        textAlign: 'center'
    },
    Summary: {
        maxWidth: 226,
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
        marginTop: 20
    },
    desSummary: {
        maxWidth: 321,
        fontFamily: 'poppinsRegular',
        color: 'gray',
        marginTop: 10

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    title2: {
        fontFamily: 'poppinsMedium',
        fontSize: 18,
    },
    subtitle2: {
        fontFamily: 'poppinsMedium',
        fontSize: 12,
        color: Colors.gray
    }
})