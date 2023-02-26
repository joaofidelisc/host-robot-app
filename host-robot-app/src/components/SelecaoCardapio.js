import { format, startOfWeek } from 'date-fns'


import React, {useEffect, useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelecaoCardapioItem from './SelecaoCardapioItem';

const { width, height } = Dimensions.get('window');



const SelecaoCardapio = (props) => {
  const [index, setIndex] = useState( props.index );
  const navigation = useNavigation();

  const handleIndexChange = (newIndex) =>{
    setIndex(newIndex);
    props.onIndexChange(newIndex);
  };

  console.log('SelecaoCardapio 17: '+ index);
  return (
    <View style={styles.fundoSelecao}>
      <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Dom'
          diaMes = {props.comecoSemana.substring(0,2)}
          // setIndex = { index => setIndex(index) }
          setIndex = {handleIndexChange}
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Seg'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 1}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Ter'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 2}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Qua'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 3}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Qui'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 4}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Sex'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 5}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
          />
        <SelecaoCardapioItem
          selectedIndex = {index}
          diaSemana =  'Sáb'
          diaMes =  {parseInt(props.comecoSemana.substring(0,2)) + 6}
          setIndex = {handleIndexChange}
          // setIndex = { index => setIndex(index) }
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