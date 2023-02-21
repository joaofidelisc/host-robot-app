import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardCardapioItem from './CardCardapioItem';

const { width, height } = Dimensions.get('window');


const CardCardapio = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.CardCardapio}>
      <CardCardapioItem/>
      <CardCardapioItem/>
    </View>
  );
};


const styles = StyleSheet.create({
    CardCardapio:{
        flexDirection: 'row',
    }
  });
  

export default CardCardapio;
