import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelecaoCardapioItem from './SelecaoCardapioItem';

const { width, height } = Dimensions.get('window');

const SelecaoCardapio = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.fundoSelecao}>
        <SelecaoCardapioItem
          diaSemana =  'Seg'
          diaMes =  '1'
        />
        <SelecaoCardapioItem
          diaSemana =  'Ter'
          diaMes =  '2'
        />
        <SelecaoCardapioItem
          diaSemana =  'Qua'
          diaMes =  '3'
        />
        <SelecaoCardapioItem
          diaSemana =  'Qui'
          diaMes =  '4'
        />
        <SelecaoCardapioItem
          diaSemana =  'Sex'
          diaMes =  '5'
        />
        <SelecaoCardapioItem
          diaSemana =  'Sáb'
          diaMes =  '6'
        />
        <SelecaoCardapioItem
          diaSemana =  'Dom'
          diaMes =  '7'
        />
      </View>
  );
};

const styles = StyleSheet.create({
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

  export default SelecaoCardapio;