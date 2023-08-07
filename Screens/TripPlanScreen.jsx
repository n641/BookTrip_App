import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import Colors from '../Constant/Colors'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../Components/Comp_BookingTour/Header'
import DateTabs from '../Components/Comp_TripPlan/DateTabs';
import Plan from '../Components/Comp_TripPlan/Plan';
import OutlineBtn from '../Components/Buttons/OutlineBtn';
import MapPopUp from './MapPopUp';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function TripPlanScreen({ navigation }) {
  const [Date, setDate] = useState(1)
  const [DetailsTrip, setDetailsTrip] = useState([

    {
      desc1: { title: 'American Airport', subTitle: 'Buy a Souvenir', time: '10:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '11:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '19:00' },
      Key: 1
    },
    {
      desc1: { title: 'Egypt Airport', subTitle: 'Buy a Souvenir', time: '9:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '10:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '11:00' },
      Key: 2

    },
    {
      desc1: { title: 'germain Airport', subTitle: 'Buy a Souvenir', time: '5:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '9:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '12:00' },
      Key: 3

    },

    {
      desc1: { title: 'germain Airport', subTitle: 'Buy a Souvenir', time: '5:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '9:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '12:00' },
      Key: 4

    },
    {
      desc1: { title: 'germain Airport', subTitle: 'Buy a Souvenir', time: '5:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '9:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '12:00' },
      Key: 5

    },
    {
      desc1: { title: 'germain Airport', subTitle: 'Buy a Souvenir', time: '5:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '9:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '12:00' },
      Key: 6

    },
    {
      desc1: { title: 'germain Airport', subTitle: 'Buy a Souvenir', time: '5:05' },
      desc2: { title: 'Check in hotel', subTitle: 'BLunch at the hotel', time: '9:00' },
      desc3: { title: 'Gala Diner at the hotel', subTitle: 'Free breakfast', time: '12:00' },
      Key: 7

    },

  ])

  const [ActiveData, setActiveData] = useState(DetailsTrip[0])

  useEffect(() => {
    const FindActiveData = DetailsTrip.find(item =>
      item.Key == Date
    )
    setActiveData(FindActiveData)
  }, [Date])

  return (
    <ScrollView style={styles.Screen}>

      <Header title={'Trip Details Plan'} navigation={navigation} />

      <View style={styles.containerDate}>
        <MaterialIcons name="date-range" size={20} color="gray" />
        <Text style={styles.Subtitle}> From:</Text>
        <Text style={[styles.Subtitle, { color: Colors.purple }]}> 09 july</Text>
        <Text style={styles.Subtitle}> To:</Text>
        <Text style={[styles.Subtitle, { color: Colors.purple }]}> 12 july</Text>
      </View>

      <DateTabs HandleDate={setDate} Date={Date} />
      <Plan ActiveData={ActiveData} />

      <View style={styles.containerBtn}>
        <OutlineBtn navigation={navigator} title={'View map'} width={width / 1.9} height={height / 15} onClick={() => {
          navigation.navigate('MapPopUp')
        }} style={{ borderRadius: 18 }} />
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    margin: 15,
    marginBottom: height / 14
  },
  title: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 20,
    color: 'black'
  },
  Subtitle: {
    fontFamily: 'poppinsRegular',
    fontSize: 13,
    color: 'gray'
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  containerBtn: {
    margin: 25,
    alignItems: 'center'
  }
})
