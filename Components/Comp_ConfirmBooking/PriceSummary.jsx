import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'

export default function PriceSummary() {
    return (
        <View>
            <View style={styles.containerSummary}>
                <View style={styles.ContainerPeopleSummary}>
                    <Text style={styles.textPeople}>2 People</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.totalPrice, { color: Colors.gray }]}>x </Text>
                        <Text style={styles.totalPrice}>$350</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.price}>$700</Text>
                </View>
            </View>

            <View style={styles.containerSummary}>
                <View style={styles.ContainerPeopleSummary}>
                    <Text style={styles.textPeople}>Luxury Room</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.totalPrice, { color: Colors.gray }]}>4 day x </Text>
                        <Text style={styles.totalPrice}>$250</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.price}>$1000</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 15
    },
    ContainerPeopleSummary: {
        justifyContent: 'center'
    },
    textPeople: {
        fontFamily: 'poppinsMedium',
        fontSize: 14,
        color: 'black'
    },
    totalPrice: {
        fontFamily: 'poppinsMedium',
        fontSize: 13,
        color: Colors.Pink
    },
    card: {
        backgroundColor: Colors.lightPink,
        paddingVertical: 9.5,
        paddingHorizontal: 25.7,
        borderRadius: 20
    },
    price: {
        fontFamily: 'poppinsMedium',
        fontSize: 16,
        color: Colors.Pink
    }
})