import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

import Colors from '../Constant/Colors'
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width

const listTab = [
    {
        status: '1',
        Key: 1
    },
    {
        status: '2',
        Key: 2
    },
    {
        status: '3',
        Key: 4
    },
    {
        status: '4',
        Key: 5
    },
]

const MoreTabs = [
    {
        status: '5',
        Key: 1
    },
    {
        status: '6',
        Key: 2
    },
    {
        status: '7',
        Key: 4
    },
    {
        status: '8',
        Key: 5
    },
]
export default function AddPeopleTabs() {
    const [Active, setActive] = useState('1')
    const [more, setmore] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Add People</Text>
            <Text style={styles.subtitle}>Number of people in your group</Text>

            <View style={styles.containerPriceAndTabs}>

                <View>
                    <Text style={styles.Price}>{Active * 175}$</Text>
                    <Text style={[styles.Price, { color: Colors.gray }]}>1 People</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* tabs */}
                    <View style={styles.listTab}>
                        {
                            listTab.map((e, i) => {
                                return (
                                    <TouchableOpacity
                                        key={e.Key}
                                        style={[styles.btn, Active === e.status && styles.btnTabActive]}
                                        onPress={() => { setActive(e.status) }}>
                                        <Text style={styles.textbtn}>{e.status}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                    <TouchableOpacity onPress={() => { setmore(!more) }} >
                        <View style={[styles.btn, { marginHorizontal: -10, padding: 10 }]}>
                            {more ? <AntDesign name="up" size={14} color={Colors.purple} />
                                : <AntDesign name="down" size={14} color={Colors.purple} />}

                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            {/* more tabs */}
            {more &&
                <View style={[styles.listTab]}>
                    {
                        MoreTabs.map((e, i) => {
                            return (
                                <TouchableOpacity
                                    key={e.Key}
                                    style={[styles.btn, Active === e.status && styles.btnTabActive]}
                                    onPress={() => { setActive(e.status) }}>
                                    <Text style={styles.textbtn}>{e.status}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 21,
        marginVertical: 10,

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
    containerPriceAndTabs: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    Price: {
        fontFamily: 'poppinsMedium',
        fontSize: 14,
        color: Colors.Pink
    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: 18.5,
    },
    btn: {
        width: Dimensions.get('window').width / 9,
        height: Dimensions.get('window').width / 9,
        padding: 4,
        marginHorizontal: width / 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.19,
        shadowRadius: 3,
        backgroundColor: 'white',
        elevation: 8
    },
    textbtn: {
        fontSize: 14,
        fontFamily: 'poppinsRegular',
    },
    btnTabActive: {
        backgroundColor: Colors.purple,
        borderRadius: 17,
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.19,
        shadowRadius: 3,
        elevation: 8
    }
})