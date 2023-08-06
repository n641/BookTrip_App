import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import Modell from '../Modal'
import Colors from '../../Constant/Colors'
import OutlineBtn from '../Buttons/OutlineBtn'
import AddRateComponent from './AddRateComponent'
import CustomeTF from '../CustomeTF'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function MakeReviewPopUp({ makeReview, setmakeReview }) {

    const [AddRate, setAddRate] = useState(1)
    const [Title, setTitle] = useState()
    const [review, setreview] = useState()
    const [onFocus, setonFocus] = useState(false)

    return (
        <Modell isModelOpen={makeReview} height={height / 2.1} width={width} justifyContent={'flex-start'} style={{ top: onFocus == true ? height / 6 : height / 2.7, justifyContent: 'space-around' }}  >
            <View style={{ justifyContent: 'space-around' }}>
                <View style={styles.line} />
                <Text style={[styles.Title]}>Ratings & Reviews </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Text style={[styles.textRate, { margin: 0 }]}>Tap to Rate:</Text>
                    <AddRateComponent handleRate={setAddRate} Rate={AddRate} />
                </View>
                <View>
                    <Text style={[styles.textRate, { margin: 5 }]}>Write a Review:</Text>
                    <CustomeTF Text={Title} settext={setTitle} styleInput={styles.inputTitle} colorPlaceHolder={'gray'} placeholder='Title' setonFocus={() => { }} />
                    <CustomeTF Text={review} settext={setreview} styleInput={styles.inputReview} colorPlaceHolder={'gray'} placeholder='Title' setonFocus={setonFocus} />
                </View>
                <OutlineBtn title={'send'} width={width / 3} height={height / 17} onClick={() => { setmakeReview(false) }} style={{ alignSelf: 'center', margin: 5 }} />
            </View>
        </Modell>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 4,
        width: 80,
        alignSelf: 'center',
        borderRadius: 15
    },
    Title: {
        fontFamily: 'poppinsSemiBold',
        fontSize: 16,
        color: Colors.purple,
        marginHorizontal: 15,
    },
    textRate: {
        fontFamily: 'poppinsRegular',
        fontSize: 14
    },

    inputTitle: {
        height: 40,
        margin: 5,
        padding: 10,
        backgroundColor: '#F8F7FE',
        borderRadius: 25
    },
    inputReview: {
        height: 110,
        margin: 5,
        padding: 10,
        backgroundColor: '#F8F7FE',
        borderRadius: 25,
        textAlignVertical: 'top'
    }
})