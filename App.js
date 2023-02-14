import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {

  renderList() {
    const names = [
      'Igor',
      'Brunna',
      'Késia',
      'John Doe'
    ];

    const textElements = names.map(name => {
      return <Text key={name}>{name}</Text>
    })

    return textElements;
  }  

  render() {
    return(
      <View>
        <Header title="Pessoas!"/>
        { this.renderList() }
      </View>
    );
  }

}
