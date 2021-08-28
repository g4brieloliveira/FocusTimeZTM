import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils/colors'
import { RoundedButton } from '../RoundedButton'

export const Timing = ({ onChangeTime }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.innerContainer }>
                <View>
                    <RoundedButton 
                        title="+1"
                        size={70} 
                        type="square"
                        onPress={() => {onChangeTime(1)}}
                        style={ styles.button }
                    />
                </View>

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
            </View>
            <View style={ styles.innerContainer }>
                <View>
                    <RoundedButton 
                        title="-1"
                        size={70} 
                        type="square"
                        onPress={() => {onChangeTime(-1)}}
                        style={ styles.button }
                    />
                </View>
                <View>
                    <RoundedButton 
                        title="-5"
                        size={70} 
                        type="square"
                        onPress={() => {onChangeTime(-5)}}
                        style={ styles.button }
                    />
                </View>

                <View>
                    <RoundedButton 
                        title="-10"
                        size={70} 
                        type="square"
                        onPress={() => {onChangeTime(-10)}}
                        style={ styles.button }
                    />
                </View>

                <View>
                    <RoundedButton 
                        title="-15"
                        size={70} 
                        type="square"
                        onPress={() => {onChangeTime(-15)}}
                        style={ styles.button }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
    },

    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.mainBlue,
        borderColor: colors.lightBlue,
    },
})