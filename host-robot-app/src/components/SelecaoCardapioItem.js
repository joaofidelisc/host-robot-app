
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SelecaoCardapioItem = (props) => {

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
      width: height*0.04375, 
      height: height*0.04375,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',     //selecionado
    },
    botaoNaoSelecionadoDiaMes:{
      marginTop:4,
      justifyContent:'center',
      alignItems:'center',
      width: height*0.04375, 
      height: height*0.04375,
      borderRadius: 100,
      backgroundColor: '#4D94DD',   //não selecionado
    },
    textoBotaoSelecionadoDiaMes:{        
      color: '#4D94DD',               //selecionado
      fontSize: height*0.025,
    },
  textoBotaoNaoSelecionadoDiaMes:{        
    color: '#FFFFFF',             //não selecionado
    fontSize: height*0.025,
    },
    textoDiaSemana:{
        fontWeight: '600',
        fontSize: height*0.025,
        color:'#FFFFFF',
    },
    viewCardapioItem:{
      alignItems: 'center',
      width: width*0.11,
      height: height*0.0875,
    }
});  

export default SelecaoCardapioItem;
