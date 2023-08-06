import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Modell from '../Modal'
import Colors from '../../Constant/Colors'
import ReviewCard from './ReviewCard'
import OutlineBtn from '../Buttons/OutlineBtn'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function ReviewPopUp({ ReviewModal, setReviewModal, setmakeReview, Reviews }) {
    return (
        <Modell isModelOpen={ReviewModal} height={height / 2.1} width={width} justifyContent={'flex-start'} style={{ top: height / 2.7, justifyContent: 'space-around' }}  >
            <View style={{ justifyContent: 'space-around' }}>
                <View style={styles.line} />
                <Text style={[styles.Title]}>Preview <Text style={{ color: 'gray' }}>{'(345)'}</Text></Text>
                {
                    Reviews.map((e, i) => (
                        <ReviewCard key={i} personImg={e.personImage} review={e.review} rate={e.rate} />
                    ))
                }

                <OutlineBtn title={'Review'} width={width / 3} height={height / 17} onClick={() => {
                    setReviewModal(false)
                    setmakeReview(true)
                }} style={{ alignSelf: 'center' }} />
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
})