import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardCardapioItem from './CardCardapioItem';

const { width, height } = Dimensions.get('window');


const CardCardapio = (props) => {
  
  return (
    <View style={styles.CardCardapio}>
      <CardCardapioItem date ={props.date} data={props.almoco} refeicao={'Almoço'} horario={'11h00 - 14h00'}/>
      <CardCardapioItem date ={props.date} data={props.jantar} refeicao={'Jantar'} horario={'17h00 - 19h00'}/>
    </View>
  );
};


const styles = StyleSheet.create({
    CardCardapio:{
        flexDirection: 'row',
    }
  });
  

export default CardCardapio;
