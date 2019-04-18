import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HistoricoItem extends Component {

  constructor(props){
    super(props);

    let bg = '#00ff00';
    if(this.props.data.type == 'despesa'){
      bg = '#ff0000'
    }

    this.state ={
      bg: bg
    };
  }

  render() {
    return(
      <View style={[styles.area, {backgroundColor:this.state.bg}]}>
        <Text>{this.props.data.type}</Text>
        <Text>R$ {this.props.data.valor}</Text>
      </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  area: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  }
});