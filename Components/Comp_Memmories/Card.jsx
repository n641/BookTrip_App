import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Card({ children , title , time , bg }) {
  return (
    <View style={[styles.card , {backgroundColor:bg}]}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <Text style={styles.time}>At {time} PM</Text>

    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightPink,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: -50,
    width: width / 1.5,
    marginHorizontal: 25,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  },
  time: {
    fontFamily: 'poppinsMedium',
    fontSize: 15,
    textAlign: 'center',
    margin: 10

  }
})