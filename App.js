import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  return (
    <View>      
        <Header title="Pessoas!" />        
    </View>
  );
}
