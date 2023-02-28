import React, { useEffect, useState} from 'react';

import { format, startOfWeek } from 'date-fns'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import SelecaoCardapio from '../../components/SelecaoCardapio';
import CardCardapio from '../../components/CardCardapio';

const { width, height } = Dimensions.get('window');

export default function Cardapio() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [index, setIndex] = useState( parseInt( format( new Date(2023,1,12), 'dd') ));
  
  const [dataAtual, setDataAtual] = useState(new Date());
  const [diaDoMesAtual, setDiaDoMesAtual] = useState(format( dataAtual, 'dd'));
  const [mesAtual, setMesAtual] = useState(format(dataAtual, 'MM'));
  const [anoAtual, setAnoAtual] = useState(format( dataAtual, 'yyyy'));


  const [almoco, setAlmoco] = useState('');
  const [jantar, setJantar] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(parseInt( format(dataAtual, 'dd')));

  const handleIndexChange = (newIndex) =>{
    setSelectedIndex(newIndex);
  }

  useEffect(()=>{
    const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const dia = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: 'numeric' });
  })


  useEffect(() => {
    fetch('https://petbcc.ufscar.br/ru_api/')
      .then((response) => response.json())
      .then((json) => setData(json))  
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  useEffect(()=>{
    if (data != []){
      var dataSelecionada = anoAtual + '-' + mesAtual + '-' + selectedIndex;
      console.log("Antes de cardapio\n");
      const cardapiosSaoCarlos = data.filter( x => (x.campus === 'São Carlos' && x.date === dataSelecionada) );
      
      // const almoco = cardapiosSaoCarlos.filter( z => z.meal_type === 'Almoço');
      // const jantar = cardapiosSaoCarlos.filter( z => z.meal_type === 'Jantar');
      setAlmoco(cardapiosSaoCarlos.filter( z => z.meal_type === 'Almoço'));
      setJantar(cardapiosSaoCarlos.filter( z => z.meal_type === 'Jantar'));
      console.log(cardapiosSaoCarlos.filter( z => z.meal_type === 'Jantar'));
      console.log(cardapiosSaoCarlos.filter( z => z.meal_type === 'Almoço'));
    }
  }, [data, selectedIndex]);

  useEffect(()=>{
    console.log('Cardapiojs 59: '+selectedIndex);
  },[selectedIndex]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <SelecaoCardapio 
          index = {selectedIndex}
          onIndexChange = {handleIndexChange}
          comecoSemana = {format( startOfWeek( dataAtual ), 'dd/MM/yyyy' ) }
        />
        <View>
          { isLoading ? <Text>Carregando...</Text> : <CardCardapio date={dataAtual} almoco={almoco} jantar={jantar}/> }
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
    padding: 20,
    height: height*0.11625,
    width: width*0.8421,
  }
});
