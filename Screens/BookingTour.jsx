import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../Constant/Colors'

import Header from '../Components/Comp_BookingTour/Header'
import CardOfTrip from '../Components/Comp_BookingTour/CardOfTrip'
import AddPeopleTabs from '../Components/Comp_BookingTour/AddPeopleTabs'
import SelectRoom from '../Components/Comp_BookingTour/SelectRoom'
import Transportation from '../Components/Comp_BookingTour/Transportation'
import MainBtn from '../Components/Buttons/MainBtn'

import SemiCard from '../Components/SemiCard'

import PopViewRoom from './PopViewRoom'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function BookingTour({ navigation }) {
    const [isModelOpen, setisModelOpen] = React.useState(false)

    const HandleModel = (val) => {
        setisModelOpen(val)
    }
    return (
        <ScrollView contentContainerStyle={styles.Screen}>

            <PopViewRoom HandleModel={HandleModel} isModelOpen={isModelOpen} navigation={navigation} />

            <SemiCard style={styles.containerAbove}>
                <StatusBar hidden={true} />
                <Header navigation={navigation} title={'Booking Trip'} />
                <CardOfTrip />
                <AddPeopleTabs />
                <SelectRoom HandleModel={HandleModel} />
                <Transportation />
            </SemiCard>

            <View style={styles.footer}>

                <View style={{ alignItems: 'center', marginHorizontal: 21 }}>
                    <Text style={styles.Title}>Total</Text>
                    <Text style={styles.subtitle}>$1250</Text>
                </View>

                <View>
                    <MainBtn onClick={() => {
                        navigation.navigate('ConfirmBookingScreen')
                    }}
                        navigation={navigation} title={'Confirm'} width={width/2.5} height={height / 13.2} />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Screen: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
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
        padding: 10
    }
})