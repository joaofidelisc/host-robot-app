import { format, startOfWeek } from 'date-fns'

import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SelecaoCardapioItem = (props) => {
  const navigation = useNavigation();

  const { index, setIndex, selectedIndex } = props;

  return (
    <View style={styles.viewCardapioItem}>
      <Text style={styles.textoDiaSemana}>
        {props.diaSemana}
      </Text>
      <TouchableOpacity 
        style={ (props.diaMes == selectedIndex ) ? styles.botaoSelecionadoDiaMes : styles.botaoNaoSelecionadoDiaMes} 
        onPress={(index) => setIndex(props.diaMes)}
      >
        <Text style={ (props.diaMes == selectedIndex) ? styles.textoBotaoSelecionadoDiaMes : styles.textoBotaoNaoSelecionadoDiaMes}>
          {props.diaMes}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//onPress= { () => recebeIndex(props.diaMes) }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoSelecionadoDiaMes:{
      marginTop:4,
      justifyContent:'center',
      alignItems:'center',
      width: 30, 
      height: 30,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',     //selecionado
      //backgroundColor: '#4D94DD',   //não selecionado
    },
    botaoNaoSelecionadoDiaMes:{
      marginTop:4,
      justifyContent:'center',
      alignItems:'center',
      width: 30, 
      height: 30,
      borderRadius: 100,
      backgroundColor: '#4D94DD',   //não selecionado
    },
    textoBotaoSelecionadoDiaMes:{        
      color: '#4D94DD',               //selecionado
      //margin:3,
    },
  textoBotaoNaoSelecionadoDiaMes:{        
    color: '#FFFFFF',             //não selecionado
    //margin:3,
    },
    textoDiaSemana:{
        fontWeight: '600',
        color:'#FFFFFF',
    },
    viewCardapioItem:{
      //paddingLeft: 50,
      //paddingRight: 20,
      alignItems: 'center',
      width: width*0.11,
      //width: 120,
      height: height*0.0875,
    }
});  

export default SelecaoCardapioItem;
