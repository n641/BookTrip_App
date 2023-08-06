import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function CustomeTF({Text , settext , styleInput , colorPlaceHolder , placeholder , setonFocus }) {
    return (
        <View>
            <TextInput
                style={styleInput}
                onChangeText={settext}
                value={Text}
                placeholder={placeholder}
                placeholderTextColor={colorPlaceHolder}
                onFocus={()=>{setonFocus(true)}}
                onSubmitEditing={()=>{setonFocus(false)}}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
})