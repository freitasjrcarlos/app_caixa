import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from './FirebaseConnection';

export default class AddDespesa extends Component {

  static navigationOptions = {
    title: "Adicionar Despesa",
  }

  constructor(props){
    super(props);
    this.state = {
      valor:''
    };

    this.retirar = this.retirar.bind(this);
   
  }

  retirar(){
    if(this.state.valor != '') {

      let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
      let user = firebase.database().ref('users').child(firebase.auth().currentUser.uid)

      //Adicionando no histórico
      let key = historico.push().key;
      historico.child(key).set({
        type: 'despesa',
        valor:this.state.valor        
      });


      //Alterando o saldo
      user.once('value').then((snapshot)=>{

        let saldo = parseFloat(snapshot.val().saldo);
        saldo -= parseFloat(this.state.valor);

        user.set({
          saldo: saldo
        });

        this.props.navigation.goBack();

      });
    }   
  }

  render() {
    return(
      <View style={styles.container}>
        <Text> Valor gasto: </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={this.state.valor}
          onChangeText={(valor)=>this.setState({valor})}
          autoFocus={true}
        />
        <Button title="Add despesa" onPress={this.retirar} />
      </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#dddddd',
    marginTop: 20,
  }
});