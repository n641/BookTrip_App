import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../Constant/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Images from './Images';
import OutlineBtn from '../Buttons/OutlineBtn'
import ReviewCard from './ReviewCard';

import ReviewPopUp from './ReviewPopUp';
import MakeReviewPopUp from './MakeReviewPopUp';
import DescriptionPopUp from './DescriptionPopUp';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function DetailsCard({ navigation }) {
    const [ReviewModal, setReviewModal] = useState(false)
    const [makeReview, setmakeReview] = useState(false)
    const [Description, setDescription] = useState(false)

    const [Reviews, setReviews] = useState([
        {
            rate: 5.0,
            review: 'Consectetur urna adipiscing elit, sed do eiusmod tempor eget.',
            personImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            rate: 5.0,
            review: 'Consectetur urna adipiscing elit, sed do eiusmod tempor eget.',
            personImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            rate: 5.0,
            review: 'Consectetur urna adipiscing elit, sed do eiusmod tempor eget.',
            personImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'

        },

    ])
    return (
        <View style={styles.container} onPress={() => {
            Keyboard.dismiss()
        }}>

            <View style={styles.CotainerDes}>
                <View style={[{ alignItems: 'center' }, styles.containericon]}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                        colors={['#EBC2FC', '#E0A5F9', '#D587F5']} style={styles.btn}>
                        <FontAwesome5 name="hotel" size={18} color="white" />
                    </LinearGradient>
                    <Text style={styles.subtitle}>Elitoz</Text>
                    <Text style={styles.subtitle}>Suites</Text>
                </View>

                <View style={[{ alignItems: 'center' }, styles.containericon]}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                        colors={['#FFA183', '#FF825A', '#FF6331']} style={styles.btn}>
                        <AntDesign name="clockcircle" size={18} color="white" />
                    </LinearGradient>
                    <Text style={styles.subtitle}>3</Text>
                    <Text style={styles.subtitle}>Days</Text>
                </View>

                <View style={[{ alignItems: 'center' }, styles.containericon]}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                        colors={['#F9B812', '#FCCB4C', '#FFDD86']} style={styles.btn}>
                        <AntDesign name="cloud" size={18} color="white" />
                    </LinearGradient>
                    <Text style={styles.subtitle}>240C</Text>
                    <Text style={styles.subtitle}>Cloudy</Text>
                </View>

                <View style={[{ alignItems: 'center' }, styles.containericon]}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                        colors={['#5B4DBC', '#776AD4', '#9386EC']} style={styles.btn}>
                        <FontAwesome name="plane" size={24} color="white" />
                    </LinearGradient>
                    <Text style={styles.subtitle}>09</Text>
                    <Text style={styles.subtitle}>July</Text>
                </View>
            </View>


            <View style={styles.container2}>
                <Images />
                <OutlineBtn title={'Trip Plan'} width={width / 3} height={height / 17} onClick={() => {
                    navigation.navigate('MyTabs')
                }} style={{}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity onPress={() => { setDescription(true) }}>
                    <Text style={[styles.Title, { color: 'gray', marginHorizontal: 25 }]}>Description</Text>
                </TouchableOpacity>

                <View>
                    <Text style={[styles.Title, { color: 'gray', color: Colors.purple }]}>Review</Text>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: Colors.purple, width: 20 }} />
                </View>
            </View>

            <View >
                <ReviewCard personImg={Reviews[0].personImage} review={Reviews[0].review} rate={Reviews[0].rate} />
            </View>

            <TouchableOpacity style={{ alignItems: 'center', padding: 10 }} onPress={() => { setReviewModal(true) }}>
                <Text style={styles.subtitle}>View more</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: Colors.shadowOfHeader, width: 50 }} />
            </TouchableOpacity>

            <ReviewPopUp ReviewModal={ReviewModal} setReviewModal={setReviewModal} setmakeReview={setmakeReview} Reviews={Reviews} />
            <MakeReviewPopUp makeReview={makeReview} setmakeReview={setmakeReview} />
            <DescriptionPopUp Description={Description} setDescription={setDescription} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: width,
        height: height / 2.1,
        position: 'absolute',
        borderRadius: 25,
        justifyContent: 'space-evenly',
        top: height / 2.4
    },
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
    },
    subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 12,
        color: 'black'
    },
    CotainerDes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems: 'center',
        margin: 10
    },
    btn: {
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    containericon: {
        backgroundColor: 'white',
        shadowColor: 'blacks',
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 5,
        padding: 10,
        borderRadius: 25
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },

})