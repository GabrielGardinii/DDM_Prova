import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Eduardo from './Eduardo/';
import Gabriel from './Gabriel/';

export default function App() {
  return (
    <View style={styles.container}>
    <Eduardo/> 
    <Gabriel/>  
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
});
