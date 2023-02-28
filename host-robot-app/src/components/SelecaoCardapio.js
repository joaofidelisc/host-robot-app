import { format, startOfWeek, addDays } from 'date-fns'
import pt from 'date-fns/esm/locale/pt/index.js';

import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SelecaoCardapioItem from './SelecaoCardapioItem';

const { width, height } = Dimensions.get('window');



const SelecaoCardapio = (props) => {
  const [index, setIndex] = useState( props.index );
  const [dates, setDates] = useState([]);  

  const handleIndexChange = (newIndex) =>{
    setIndex(newIndex);
    props.onIndexChange(newIndex);
  };

  useEffect(() => {
    const [dia, mes, ano] = props.comecoSemana.split('/');
    const date = new Date(ano, mes-1, dia);
    const firstDayOfWeek = startOfWeek(date, { weekStartsOn: 0 });
    const newDates = Array(7).fill().map((_, i) => addDays(firstDayOfWeek, i));
    setDates(newDates);
    console.log('Dates:', newDates);
  }, [props.comecoSemana]);


  console.log('SelecaoCardapio 17: '+ index);
  return (
    <View style={styles.fundoSelecao}>
      {dates.map((date, i) => (
        <SelecaoCardapioItem
          key={i}
          selectedIndex={index}
          diaSemana={format(date, 'EEE', {locale: pt})}
          diaMes={format(date, 'd')}
          setIndex={handleIndexChange}
        />
      ))}
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
      height: height*0.11625,
      width: width*0.8421,
    }
  });

  export default SelecaoCardapio;