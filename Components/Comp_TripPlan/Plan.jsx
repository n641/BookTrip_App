import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import Img1 from '../../assets/diver.png'
import Img2 from '../../assets/beach.png'
import Img3 from '../../assets/orangejuice.png'

import Dash from 'react-native-dash';
import OutlineBtn from '../Buttons/OutlineBtn';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Dot = ({ time, bg, color, height, showLine }) => (
    <View style={[styles.containerLineAndDate]}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <View style={{ alignItems: 'center' }}>
                <View style={[styles.containerCircle, , { backgroundColor: bg }]}>
                    <FontAwesome name="circle" size={15} color={color} />
                </View>
                {showLine && <Dash style={{ width: 1, height: height, flexDirection: 'column', marginVertical: 2 }} dashColor={Colors.shadowOfHeader} />}
            </View>
            <Text style={styles.date}>{time}</Text>
        </View>
    </View>
)

const CardDetails = ({ title, subTitle, icon, iconsColor, bg }) => (
    <View style={[styles.card, { backgroundColor: bg }]}>
        <Ionicons name={icon} size={24} color={iconsColor} style={{ marginHorizontal: 23.5 }} />
        <View>
            <Text style={styles.titleCard}>{title}</Text>
            <Text style={styles.SubtitleCard}>{subTitle}</Text>
        </View>
    </View>
)

export default function Plan({ ActiveData }) {
    return (
        <View style={{ marginVertical: 15 }}>

            <View >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Dot color={'white'} time={ActiveData.desc1.time} bg={Colors.Pink} height={height / 6} showLine={true} />
                    <View style={{ alignItems: 'center' }}>
                        <CardDetails title={ActiveData.desc1.title} subTitle={ActiveData.desc1.subTitle} icon={'airplane'} iconsColor={Colors.Pink} bg={Colors.lightPink} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Ionicons name="car-sport-sharp" size={24} color="black" />
                            <Text style={styles.SubtitleCard}>Take 25 min to Santorini</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Dot color={'white'} time={ActiveData.desc2.time} bg={Colors.Pink} height={height / 3.2} showLine={true} />
                    <View style={{ alignItems: 'center' }}>
                        <CardDetails title={ActiveData.desc1.title} subTitle={ActiveData.desc1.subTitle} icon={'bed'} iconsColor={'gray'} bg={Colors.lightPink} />

                        <View style={styles.CotainerDes}>

                            <View style={{ alignItems: 'center' }}>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                    colors={['#EBC2FC', '#E0A5F9', '#D587F5']} style={styles.btn}>
                                    <Image source={Img2} style={{ width: 60, height: 60 }} resizeMode='stretch' />
                                </LinearGradient>
                                <Text style={[styles.subTitle, { maxWidth: 80 }]}>Go to the beach</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                    colors={['#FFA183', '#FF825A', '#FF6331']} style={styles.btn}>
                                    <Image source={Img1} style={{ width: 60, height: 60 }} resizeMode='stretch' />
                                </LinearGradient>
                                <Text style={[styles.subTitle, { maxWidth: 65, height: height / 14 }]}>Diving</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.5 }}
                                    colors={['#F9B812', '#FCCB4C', '#FFDD86']} style={styles.btn}>
                                    <Image source={Img3} style={{ width: 60, height: 60 }} resizeMode='stretch' />
                                </LinearGradient>
                                <Text style={[styles.subTitle, { maxWidth: 60 }]}>Enjoy a drink</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Dot color={'white'} time={ActiveData.desc1.time} bg={Colors.shadowOfHeader} height={height / 8} showLine={false} />
                    <View style={{ alignItems: 'center' }}>
                        <CardDetails title={ActiveData.desc1.title} subTitle={ActiveData.desc1.subTitle} icon={'beer'} iconsColor={Colors.purple} bg={Colors.lightBlue} />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerCircle: {
        backgroundColor: Colors.Pink,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 15
    },
    date: {
        fontFamily: 'poppinsRegular',
        fontSize: 14,
        margin: 5
    },
    card: {
        backgroundColor: Colors.lightPink,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -15,
        width: width / 1.5,
        marginHorizontal: 15,
        padding: 25
    },
    titleCard: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 14
    },
    SubtitleCard: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'gray'
    },
    btn: {
        padding: 10,
        borderRadius: 80,
        alignItems: 'center',
        margin: 5,
        overflow: 'hidden',
        maxWidth: 75
    },
    subTitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: 'gray',
        marginTop: 5,
        textAlign: 'center'
    },
    CotainerDes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        alignItems: 'center'
    },

})
