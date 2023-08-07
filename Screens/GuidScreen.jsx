import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function GuidScreen() {
    const [first, setfirst] = useState([
        'https://plus.unsplash.com/premium_photo-1679870685410-5e858b68273e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://plus.unsplash.com/premium_photo-1679870685410-5e858b68273e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://plus.unsplash.com/premium_photo-1679870685410-5e858b68273e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://plus.unsplash.com/premium_photo-1679870685410-5e858b68273e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://plus.unsplash.com/premium_photo-1679870685410-5e858b68273e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    ])
  return (
    <View>
      <Text>GuidScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})