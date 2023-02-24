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
  })

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState( parseInt( format( new Date(2023,1,12), 'dd') ));

  useEffect(() => {
    fetch('https://petbcc.ufscar.br/ru_api/')
      .then((response) => response.json())
      .then((json) => setData(json))  
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const dataAtual = new Date(2023,1,12);
  const diaDoMesAtual = format( dataAtual, 'dd');
  const mesAtual = format( dataAtual, 'MM');
  const anoAtual = format( dataAtual, 'yyyy');

  var dataSelecionada = anoAtual + '-' + mesAtual + '-' + diaDoMesAtual;
  const cardapiosSaoCarlos = data.filter( x => (x.campus === 'São Carlos' && x.date === dataSelecionada) );
  const almoco = cardapiosSaoCarlos.filter( z => z.meal_type === 'Almoço')
  const jantar = cardapiosSaoCarlos.filter( z => z.meal_type === 'Jantar')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <SelecaoCardapio index={index} comecoSemana = {format( startOfWeek( dataAtual ), 'dd/MM/yyyy' ) }/>
        <View>
          { isLoading ? <Text>Carregando...</Text> : <CardCardapio almoco={almoco} jantar={jantar}/> }
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
