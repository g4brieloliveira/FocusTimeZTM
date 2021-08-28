import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer';

import { colors } from './src/utils/colors';
import { fontSizes, spacingSizes } from './src/utils/sizes'
import { FocusHistory } from './src/components/FocusHistory';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  const onClear = () => {
    setFocusHistory([])
  }

  const saveFocusHistory = async () =>  {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory))
    } catch(err) {
      console.log(err)
    }
  }

  const loadFocusHistory = async () =>  {
    try {
      const history = await AsyncStorage.getItem("focusHistory")
      if (history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history))
      }
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadFocusHistory()
  }, [])

  useEffect(() => {
    saveFocusHistory()
  }, [focusHistory])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {
        focusSubject 
        ?
        <Timer 
          focusSubject={ focusSubject } 
          setFocusSubject={ setFocusSubject }
          clearSubject={ () => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED)
            setFocusSubject(null)
          } }
          onTimerEnd={() =>  {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
            setFocusSubject(null)
          }}
        />
        :
        <>
          <Focus addSubject={ setFocusSubject }/>  
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>      
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    paddingTop: Platform.OS === 'ios' ? spacingSizes.medium : spacingSizes.large,
    backgroundColor: colors.mainBlue,
  }
});
