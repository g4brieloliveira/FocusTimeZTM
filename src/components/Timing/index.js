import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils/colors'
import { RoundedButton } from '../RoundedButton'



export const Timing = ({ onChangeTime }) => {
    return (
        <>
            <View>
                <RoundedButton 
                    title="+5"
                    size={70} 
                    type="square"
                    onPress={() => {onChangeTime(5)}}
                    style={ styles.button }
                />
            </View>

            <View>
                <RoundedButton 
                    title="+10"
                    size={70} 
                    type="square"
                    onPress={() => {onChangeTime(10)}}
                    style={ styles.button }
                />
            </View>

            <View>
                <RoundedButton 
                    title="+15"
                    size={70} 
                    type="square"
                    onPress={() => {onChangeTime(15)}}
                    style={ styles.button }
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.mainBlue,
        borderColor: colors.lightBlue,
    },
})