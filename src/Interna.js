import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Interna extends Component {

  static navigationOptions = {
    title: "Interna",
    header: null
  }

  render() {
    return(
      <View style={styles.container}>
        <Text> ... </Text>
      </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});