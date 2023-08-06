import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddRateComponent({ handleRate, Rate }) {
    const [DefaultRate, setDefaultRate] = useState(1)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])
    const starFilled = <AntDesign name="star" size={25} color="#FFDD86" />
    const Starconer = <AntDesign name="staro" size={25} color="gray" />


    const Customeraet = () => {
        return (
            <View style={styles.customeRatingBar}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => {
                                    setDefaultRate(item)
                                    handleRate(item)
                                }}

                            >
                                {
                                    item <= DefaultRate ?
                                        starFilled : Starconer
                                }
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }
    return (
        <View>
            <Customeraet />
        </View>
    )
}

const styles = StyleSheet.create({
    customeRatingBar: {
        justifyContent: 'center',
        flexDirection: 'row',
    }
})