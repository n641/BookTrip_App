import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../Constant/Colors'

const width = Dimensions.get('window').width

const listTab = [
    {
        status: '1',
        Day: '09',
        month: 'july',
        Key: 1
    },
    {
        status: '2',
        Day: '10',
        month: 'july',
        Key: 2
    },
    {
        status: '3',
        Day: '11',
        month: 'july',
        Key: 3
    },
    {
        status: '4',
        Day: '12',
        month: 'july',
        Key: 4
    },
    {
        status: '4',
        Day: '13',
        month: 'july',
        Key: 5
    },
    {
        status: '4',
        Day: '14',
        month: 'july',
        Key: 6
    }, {
        status: '4',
        Day: '15',
        month: 'july',
        Key: 7
    },
]

export default function DateTabs({ HandleDate, Date }) {
    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.listTab}>
                    {
                        listTab.map((e, i) => {
                            return (
                                <TouchableOpacity
                                    key={e.Key}
                                    style={[styles.btn, Date === e.Key && styles.btnTabActive]}
                                    onPress={() => { HandleDate(e.Key) }}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={[styles.textbtn, Date === e.Key && styles.textActive]}>{e.Day}</Text>
                                        <Text style={[styles.textbtn, Date === e.Key && styles.textActive]}>{e.month}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: 18.5,
    },
    btn: {
        width: Dimensions.get('window').width / 5.6,
        height: Dimensions.get('window').width / 5,
        padding: 4,
        marginRight: width / 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    textbtn: {
        fontSize: 14,
        fontFamily: 'poppinsSemiBold',
    },
    btnTabActive: {
        borderRadius: 25,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.19,
        shadowRadius: 3,
        elevation: 8,
        borderColor: Colors.purple,
        borderWidth: 1.2,
        backgroundColor: 'white',
        alignSelf:'center'
    },
    textActive: {
        color: Colors.purple
    }
})