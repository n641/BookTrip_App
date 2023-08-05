import { StyleSheet, Text, View , Dimensions , ScrollView} from 'react-native'
import React, { useState } from 'react'

import Header from '../Components/Comp_BookingTour/Header'
import DateTabs from '../Components/Comp_TripPlan/DateTabs'
import Plan from '../Components/Comp_Memmories/Plan'


const width = Dimensions.get('window').width

export default function Memmories({ navigation }) {
    const [Date, setDate] = useState(1)
    return (
        <ScrollView>
            <Header navigation={navigation} title={'Trip Name'} />
            <Text style={styles.desText}>Description about trips Description </Text>
            <DateTabs Date={Date} HandleDate={setDate} />
            <Plan/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    desText: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        textAlign:'center',
        alignItems:'center',
        margin:10
    },

})