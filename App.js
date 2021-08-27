import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer';

import { colors } from './src/utils/colors';
import { fontSizes, spacingSizes } from './src/utils/sizes'


export default function App() {
  const [focusSubject, setFocusSubject] = useState('Fazer este App')
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {
        focusSubject 
        ?
        <Timer 
          focusSubject={ focusSubject } 
          setFocusSubject={ setFocusSubject }
        />
        :
        <Focus addSubject={ setFocusSubject }/>        
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
