import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'

export default function OutlineBtn({navigation, title, width, height, onClick}) {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.card , {width:width, height:height}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    borderWidth:1,
    borderColor:Colors.gray,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  }
})