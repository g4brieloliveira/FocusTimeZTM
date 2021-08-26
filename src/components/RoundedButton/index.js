import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles(size, props.type).radius, style]}>
            <Text style={[styles(size).text, textStyle]}>{ props.title }</Text>
        </TouchableOpacity>
    )
}


const styles = (size, type) => StyleSheet.create({
    radius: {
        borderRadius: type === 'circle' ? size/2 : 4,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.mainWhite,
    },

    text: {
        color: colors.mainWhite,
        fontSize: size/2,
    }
})