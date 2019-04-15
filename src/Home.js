import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: "Home",
    header: null
  }

  render() {
    return(
      <ImageBackground source={require('../assets/images/fundo.jpg')} style={styles.bg} >

      </ImageBackground>
    );
  }
}

//Estilos

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null
  }
});