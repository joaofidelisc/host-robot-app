import React, {useEffect} from 'react';


import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const cardWidth = (width*0.8)/2;

const CardCardapioItem = (props) => {
  const navigation = useNavigation();

  return (
      <View style={styles.CardCardapio}>

        <View style={styles.viewTituloRefeicao}>
          <Text style={styles.tituloRefeicao}>Almoço</Text>
        </View>

        <View style={styles.viewHorarioRefeicao}>
          <Image source={require('../assets/relogio.png')} style={{width: 20, height: 20}}/>
          <Text style={{paddingLeft:16}}>11h00 - 14h00</Text>
        </View>
          
        <View style={styles.viewDescricaoRefeicao}>
          <Text style={styles.textoItemRefeicao}>Prato Principal - Sem restrição</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Prato Principal - Vegetariano</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Prato Principal - Extra com ovo</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Guarnição</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Acompanhamentos</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Salada</Text>
          <Text style={styles.textoValor}>teste</Text>
          
          <Text style={styles.textoItemRefeicao}>Sobremesa</Text>
          <Text style={styles.textoValor}>teste</Text>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  textoValor:{
    paddingLeft: 24,
  },
  textoItemRefeicao:{
    //fontWeight:600,
    fontWeight: '700',
  },
  viewDescricaoRefeicao:{
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 48,  
  },
  viewHorarioRefeicao:{
    paddingTop: 8,
    paddingBottom: 8,
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
  },
  viewTituloRefeicao:{
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
  },
  tituloRefeicao:{
    //fontWeight: 600,
    fontWeight: '700',
    fontSize: 27,
  },
  CardCardapio:{
        //backgroundColor: 'red',
        width: cardWidth,
        //height: 50,
        marginTop: 24,
        marginLeft: (width*0.0421)/4,
        marginRight: (width*0.0421)/4,
        borderRadius: 16,
        borderColor: '#9C9C9C',
        borderWidth:1,
    }
  });
  

export default CardCardapioItem;
