import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PriceSummary() {
    return (
        <View>
            <View style={styles.ContainerPeopleSummary}>
                <Text>2 People</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>x</Text>
                    <Text>$350</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerPeopleSummary: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})