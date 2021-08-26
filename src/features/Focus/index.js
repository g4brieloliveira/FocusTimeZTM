import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { fontSizes, spacingSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'


import { RoundedButton } from '../../components/RoundedButton'

export const Focus = ({ addSubject }) => {
    const [item, setItem] = useState(null)

    return (
        <View style={ styles.container }>
            <View style={ styles.titleContainer }>  
                <Text style={ styles.title }>No que você gostaria de focar agora?</Text>
                <View style={ styles.inputView }>
                    <TextInput 
                    style={ styles.input }
                    placeholder="Digite aqui seu novo foco"
                    onChange={
                        ({ nativeEvent }) => {
                            setItem(nativeEvent.text)
                        }}
                    />
                    <RoundedButton 
                        onPress={() => { addSubject(item) }} 
                        title="+" 
                        size={ 63 } 
                        type="square" 
                    />
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleContainer: {
        flex: 0.5,
        padding: spacingSizes.medium,
        justifyContent: 'center',
    },

    inputView: {
        marginTop: spacingSizes.large,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: colors.mainWhite,
        fontWeight: 'bold',
        fontSize: fontSizes.large,
    },

    input: {
        flex: 1,
        marginRight: spacingSizes.small,
    },
})