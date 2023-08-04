import { StyleSheet, Text, View, Dimensions , ScrollView } from 'react-native'
import React from 'react'

import SemiCard from '../Components/SemiCard'
import Header from '../Components/Comp_BookingTour/Header'
import SummaryCard from '../Components/Comp_ConfirmBooking/SummaryCard'
import PriceSummary from '../Components/Comp_ConfirmBooking/PriceSummary'
import PaymentMethod from '../Components/Comp_ConfirmBooking/PaymentMethod'
import MainBtn from '../Components/Buttons/MainBtn'

import Colors from '../Constant/Colors'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function ConfirmBookingScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.Screen}>

      <SemiCard>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Header navigation={navigation} title={'Confirm Booking'} />
          <View style={{ margin: 20.5 }}>
            <SummaryCard />
            <PriceSummary />
            <PaymentMethod />
          </View>
        </View>

      </SemiCard>

      <View style={styles.footer}>

        <View style={{ alignItems: 'center', marginHorizontal: 21 }}>
          <Text style={styles.Title}>Total</Text>
          <Text style={styles.subtitle}>$1250</Text>
        </View>

        <View>
          <MainBtn onClick={() => {
            navigation.navigate('ComplateBooking')
          }}
            navigation={navigation} title={'Confirmation'} width={width / 2.5} height={height / 13.2} />
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Screen: {
    flexGrow: 1,
    justifyContent: 'space-around',
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