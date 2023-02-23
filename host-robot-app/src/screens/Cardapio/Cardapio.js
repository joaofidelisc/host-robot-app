import React, { useEffect, useState} from 'react';

import { format, startOfWeek } from 'date-fns'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import SelecaoCardapio from '../../components/SelecaoCardapio';
import CardCardapio from '../../components/CardCardapio';

const { width, height } = Dimensions.get('window');

export default function Cardapio() {
  
  useEffect(()=>{
    const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const dia = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: 'numeric' });
    //console.log('Cadapio.js:18: ');
    //console.log(format( new Date(), 'dd/MM/yyyy' ) );
    //console.log(format( startOfWeek(new Date()), 'dd/MM/yyyy' ) );
    //console.log('DIA:' + hoje); // exibe a data atual no formato "dd/mm/aaaa"


  })
  // const first

  /*const apiRU = async()=>{
    const resposta = await fetch("https://petbcc.ufscar.br/ru_api/");
    console.log(resposta);
  }*/

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://petbcc.ufscar.br/ru_api/')
      .then((response) => response.json())
      .then((json) => setData(json))  
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={{margin: '1%'}}>
      <SelecaoCardapio comecoSemana = {format( startOfWeek(new Date(2023,1,13)), 'dd/MM/yyyy' ) }/>
      <View>
        { isLoading ? <Text>Carregando...</Text> : <CardCardapio data={data}/> }
      </View>
      </ScrollView>
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
