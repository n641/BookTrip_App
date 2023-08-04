import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../../Constant/Colors'

import creditcard from '../../assets/creditCard.png'

import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function PaymentMethod() {
    const [value, setValue] = React.useState('Credit Card');

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Payment Method</Text>
            <Text style={styles.subtitle}>Click one of your payment</Text>


            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View style={styles.radioContainer}>

                    <View style={[styles.radioBtnContainer]}>
                        <RadioButton value="Credit Card" />
                        <Text>Credit Card</Text>
                    </View>

                    <View style={styles.radioBtnContainer}>
                        <RadioButton value="Paypal" />
                        <Text>Paypal</Text>
                    </View>

                    <View style={styles.radioBtnContainer}>
                        <RadioButton value="Cash" />
                        <Text>Cash</Text>
                    </View>

                </View>

            </RadioButton.Group>

            <View>
                <ImageBackground source={creditcard} style={{ height: height / 3.4 }} resizeMode='cover'>
                    <View style={styles.CeditCardContainer}>
                        <Text style={styles.numbers}>2333  3444  2678</Text>
                        <View style={styles.containerData}>
                            <View>
                                <Text style={styles.date1}>MONTH/ YEAR</Text>
                                <Text style={styles.date2}>04/05</Text>

                            </View>
                            <View>
                                <Text style={styles.date1}>CARDHOLDER</Text>
                                <Text style={styles.date2}>TONY NGUYEN</Text>

                            </View>

                        </View>
                    </View>
                </ImageBackground>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 28,
        maxHeight: height / 3.3,

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
    radioBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    CeditCardContainer: {
        justifyContent: 'space-evenly',
        height: height / 3.8,

    },
    containerData: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    numbers: {
        textShadowColor: Colors.shadowOfHeader,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5,
        elevation:8,
        color: 'white',
        marginLeft: width / 9,
        fontSize:14,
        fontFamily:'poppinsRegular'
    },
    date1:{
        fontFamily:'poppinsRegular',
        fontSize:11,
        color:'#FFDD86'
    },
    date2:{
        fontFamily:'poppinsSemiBold',
        fontSize:16,
        color:'white'
    }

})