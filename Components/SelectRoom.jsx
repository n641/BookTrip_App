import { StyleSheet, Text, View, FlatList, Animated, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'

import Colors from '../Constant/Colors'
import imgBed from '../assets/bed.png'

import RoomCard from './RoomCard'

export default function SelectRoom() {
    const ref = useRef(null)
    const [Rooms, setRooms] = useState([
        {
            id: 1,
            name: "Deluxe",
            price: 580,
            img: imgBed,
            bgColor: Colors.LightWhite,
            bgImg: Colors.Pink
        },
        {
            id: 2,
            name: "Luxury",
            price: 580,
            img: imgBed,
            bgColor: Colors.lightBlue,
            bgImg: Colors.purple

        }
    ])

    return (
        <Animated.View style={styles.container}>
            <Text style={styles.Title}>Select Room</Text>
            <Text style={styles.subtitle}>Choose the appropriate room</Text>

            <FlatList
                ref={ref}
                initialScrollIndex={0}
                horizontal
                data={Rooms}
                renderItem={({ item, index }) =>
                    <RoomCard item={item} index={index} />
                }
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 21,
    },
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
    },
    subtitle: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        color: Colors.gray
    },
})