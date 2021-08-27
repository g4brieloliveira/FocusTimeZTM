import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { fontSizes, spacingSizes } from '../../utils/sizes'

const minutesToMillis = (min) => min * 1000 * 60

const formatTime = (time) => time < 10 ? `0${time}` : time;


export const CountDown = ({
    minutes = 1,
    isPaused,
    onProgress
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes))
    const interval = React.useRef(null)
    const minute = Math.floor(millis / 1000 / 60 ) % 60;
    const second = Math.floor(millis / 1000 ) % 60;

    const countDown = () => {
        setMillis((time) => {
            if(time === 0) {

                return time;
            }
            const timeLeft = time - 1000
            onProgress(timeLeft / minutesToMillis(minutes))
            return timeLeft;
        })
    }

    useEffect(() => {
        if(isPaused){ 
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(countDown, 1000)
        return () => clearInterval(interval.current)
    }, [isPaused])

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    }, [minutes])

    return ( 
        <View>
            <Text style={ styles.text }>{ formatTime(minute) }:{ formatTime(second) }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.mainWhite,
        fontWeight: 'bold',
        fontSize: fontSizes.xxExtraLarge,
        padding: spacingSizes.large,
        backgroundColor: colors.lightBlue,
    },
})