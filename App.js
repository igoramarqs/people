import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';

import axios from 'axios';

export default class App extends React.Component {

  renderList() {
    /*const textElements = names.map(name => {
      return <Text key={name}>{name}</Text>
    })*/

    axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {
      const {results} = response.data;
      const names = results.map(people => people.name.first);
      console.log(names);
    })

    //return textElements;
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
