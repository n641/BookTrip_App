import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../Constant/Colors'

import Header from '../Components/Header'
import CardOfTrip from '../Components/CardOfTrip'
import AddPeopleTabs from '../Components/AddPeopleTabs'
import SelectRoom from '../Components/SelectRoom'
import Transportation from '../Components/Transportation'
import MainBtn from '../Components/Buttons/MainBtn'

const height = Dimensions.get('window').height

export default function BookingTour({ navgation }) {
    return (
        <View style={styles.Screen}>
            <View style={styles.containerAbove}>
                <StatusBar hidden={true} />
                <Header navgation={navgation} title={'Booking Trip'} />
                <CardOfTrip />
                <AddPeopleTabs />
                <SelectRoom />
                <Transportation />
            </View>

            <View style={ styles.footer}>
                <View style={{ alignItems: 'center', marginHorizontal: 21 }}>
                    <Text style={styles.Title}>Total</Text>
                    <Text style={styles.subtitle}>$1250</Text>
                </View>
                <View>
                    <MainBtn navgation={navgation} title={'Confirm'} width={160} height={height/13.2}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
    },
    containerAbove: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 35,
        textShadowColor: Colors.shadowOfHeader,
        textShadowOffset: { width: 0, height: 5 },
        elevation: 0.5,
        overflow: 'hidden'
    },
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
        flex: 5 / 4,
        padding:10
    }
})