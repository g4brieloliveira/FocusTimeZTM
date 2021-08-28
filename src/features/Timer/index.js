import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'

import { CountDown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from '../../components/Timing';

import { colors } from '../../utils/colors';
import { fontSizes, spacingSizes } from '../../utils/sizes';


const DEFAULT_TIME = 1
export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    useKeepAwake();
    const [minutes, setMinutes] = useState(DEFAULT_TIME)
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)

    const onProgress = (progress) => {
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(minutes + min)
        setProgress(1)
        setIsStarted(false)
    }

    const Vibrate = () => {
        if(Platform.OS === 'ios'){
            const interval =  setInterval(() =>  Vibration.vibrate(), 1000)
            setTimeout(() => clearInterval(interval), 10000)
        } else  {
            Vibration.vibrate(5000)
        }
    }

    const onEnd = () =>  {
        Vibrate()
        setMinutes(DEFAULT_TIME)
        setProgress(1)
        setIsStarted(false)
        onTimerEnd()
    }

    return (
        <>
            <ProgressBar 
                progress={ progress } 
                color={ colors.mainGreen } 
                style={ styles.progress }
            />

            <View style={ styles().container }>

                <View>
                    <Text style={ styles().title }>Foco atual:</Text>   
                    <Text style={ styles().task }>{ focusSubject }</Text>   
                </View>

                <View style={ styles().countdown }>
                    <CountDown 
                    minutes={ minutes } 
                    isPaused={ !isStarted } 
                    onProgress={ onProgress }
                    onEnd={ onEnd }
                    />
                </View>

                <View style={ styles().buttons }>
                    <Timing onChangeTime={ changeTime } />
                </View>

                <View style={ styles().buttonWrapper }>
                    {
                        isStarted ?
                        <View style={ styles().buttons }>
                            <RoundedButton 
                                title={isStarted ? "Pausar" : "Começar"} 
                                size={80} 
                                type="rectangle"
                                onPress={() => setIsStarted(!isStarted)}
                                style={ styles(isStarted).button }
                            />
                            <RoundedButton 
                                title={"Cancelar"} 
                                size={80} 
                                type="rectangle"
                                onPress={() => clearSubject() }
                                style={ styles(isStarted).cancelButton }
                            />
                        </View>
                        :
                        <RoundedButton 
                            title={isStarted ? "Pausar" : "Começar"} 
                            size={80} 
                            type="rectangle"
                            onPress={() => setIsStarted(!isStarted)}
                            style={ styles(isStarted).button }
                        />
                    }
                </View>
            </View>
        </>
        
    )
}

const styles = (isStarted) => StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    title: {
        color: colors.mainWhite,
        textAlign: 'center',
        fontSize: fontSizes.large
    },

    task: {
        color: colors.mainWhite,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: fontSizes.large
    },

    countdown: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttons: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        backgroundColor: isStarted ? colors.lightYellow : colors.lightGreen,
        borderColor: isStarted ? colors.mainYellow : colors.mainGreen,
    },

    cancelButton: {
        backgroundColor: colors.lightRed,
        borderColor: colors.mainRed,
    },

    progress: {
        height: spacingSizes.small,
        width: '100%',
    },
})