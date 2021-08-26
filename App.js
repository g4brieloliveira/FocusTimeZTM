import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Focus } from './src/features/Focus'
import { colors } from './src/utils/colors';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {
        focusSubject 
        ?
        <Text></Text>
        :
        <Focus addSubject={ setFocusSubject }/>        
      }
      <Text>{ focusSubject }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: colors.mainBlue,
  }
});
