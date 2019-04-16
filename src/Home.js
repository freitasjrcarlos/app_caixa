import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: "Home",
    header: null
  }

  constructor(props){
    super(props);
    this.state = {};

    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
  }

  cadastrar() {
    this.props.navigation.navigate('Cadastro');
  }

  login() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return(
      <ImageBackground source={require('../assets/images/fundo.jpg')} style={styles.bg} >
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa</Text>
          <View style={styles.buttonArea}>
            <TouchableHighlight underlayColor="#cccccc" onPress={this.cadastrar} style={styles.button}>
              <Text style={styles.btnText}> Cadastrar </Text>
            </TouchableHighlight>
              
            <TouchableHighlight underlayColor="#cccccc" onPress={this.login} style={styles.button}>
              <Text style={styles.btnText}> Login </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent',
  },
  buttonArea: {
    marginTop: 30
  },
  button: {
    backgroundColor: '#bfb300',
    margin: 10,
    height: 40,
    width: 200,
    justifyContent: 'center'
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center'
  }
});