import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from './src/components';

export default function App() {
  const [checked, setChecked] = useState(false)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
        <Checkbox 
          checked={checked}
          highlightColor="#4444ff"
          checkmarkColor="#ffffff"
          boxOutlineColor="#4444ff"
        />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 25,
    height: 25
  }
});
