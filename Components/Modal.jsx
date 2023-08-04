import { StyleSheet, Dimensions, View, Modal } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const height = Dimensions.get('window').height

export default function Modall({ isModelOpen, HandleModel, children, height, width, justifyContent }) {
    return (
        <>
            <Modal visible={isModelOpen} transparent={true} animationType='slide'  >
                <View style={[styles.modelContainer, { justifyContent: justifyContent }]}>
                    <View style={[styles.model, { height: height, width: width }]}>
                        {children} 
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modelContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
         alignItems: 'center'
    },
    model: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
        marginTop:height/22,
        borderRadius:25
    }
})