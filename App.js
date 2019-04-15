import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import Interna from './src/Interna';




const Navegador = createStackNavigator({
  Home: {
    screen: Home
  },
  Cadastro: {
    screen: Cadastro
  },
  Login: {
    screen: Login
  },
  Interna: {
    screen: Interna
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
