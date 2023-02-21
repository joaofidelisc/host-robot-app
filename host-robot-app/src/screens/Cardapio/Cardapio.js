import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import SelecaoCardapio from '../../components/SelecaoCardapio';
import CardCardapio from '../../components/CardCardapio';

const { width, height } = Dimensions.get('window');

export default function Cardapio() {
  
  // useEffect(()=>{
  //   // const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  //   const dia = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: 'numeric' });
  //   console.log('DIA:',dia); // exibe a data atual no formato "dd/mm/aaaa"

  // })
  // const first

  const apiRU = async()=>{
    const resposta = await fetch("https://petbcc.ufscar.br/ru_api/");
    console.log(resposta);
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SelecaoCardapio/>
      <CardCardapio/>
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
  cardapioSelecao:{
    backgroundColor: '#000000',
  },
  textSelecao:{
    color: 'red',
  },
  fundoSelecao:{
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4D94DD',
    //padding: 20,
    height: height*0.11625,
    width: width*0.8421,
  }
});
