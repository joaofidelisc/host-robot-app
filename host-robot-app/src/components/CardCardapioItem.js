import React, {useEffect, useState} from 'react';


import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { he } from 'date-fns/locale';

const { width, height } = Dimensions.get('window');

const cardWidth = (width*0.8)/2;

const CardCardapioItem = (props) => {
  const [existeRefeicao, setExisteRefeicao] = useState(false);
  const navigation = useNavigation();

  const cardapioDia = props.data[0];

  const mainDishUnrestricted = cardapioDia && cardapioDia.main_dish_unrestricted || 'Opção indisponível';
  const mainDishVegetarian = cardapioDia && cardapioDia.main_dish_vegetarian || 'Opção indisponível';
  const mainDishExtra = cardapioDia && cardapioDia.main_dish_extra || 'Opção indisponível';
  const garnish = cardapioDia && cardapioDia.garnish || 'Opção indisponível';
  const dessert = cardapioDia && cardapioDia.dessert || 'Opção indisponível';
  const accompaniment = cardapioDia && cardapioDia.accompaniment || 'Opção indisponível';
  const salads = cardapioDia && cardapioDia.salads || 'Opção indisponível';

  
  return (
      <View style={styles.CardCardapio}>

        <View style={styles.viewTituloRefeicao}>
          <Text style={styles.tituloRefeicao}>{props.refeicao}</Text>
        </View>

        <View style={styles.viewHorarioRefeicao}>
          <Image source={require('../assets/icons/relogio.png')} style={{width: height*0.04625, height: height*0.04625}}/>
          <Text style={{paddingLeft:'2%', fontSize: height*0.0202}}>{props.horario}</Text>
        </View>
          <View style={styles.viewDescricaoRefeicao}>
            <Text style={styles.textoItemRefeicao}>Prato Principal - Sem restrição</Text>
            <Text style={styles.textoValor}>{mainDishUnrestricted}</Text>
            
            <Text style={styles.textoItemRefeicao}>Prato Principal - Vegetariano</Text>
            <Text style={styles.textoValor}>{mainDishVegetarian}</Text>
            
            <Text style={styles.textoItemRefeicao}>Prato Principal - Extra com ovo</Text>
            <Text style={styles.textoValor}>{mainDishExtra}</Text>
            
            <Text style={styles.textoItemRefeicao}>Guarnição</Text>
            <Text style={styles.textoValor}>{garnish}</Text>
            
            <Text style={styles.textoItemRefeicao}>Acompanhamentos</Text>
            <Text style={styles.textoValor}>{accompaniment}</Text>
            
            <Text style={styles.textoItemRefeicao}>Salada</Text>
            <Text style={styles.textoValor}>{salads}</Text>
            
            <Text style={styles.textoItemRefeicao}>Sobremesa</Text>
            <Text style={styles.textoValor}>{dessert}</Text>
          </View>
      </View>
  );
};


const styles = StyleSheet.create({
  textoValor:{
    paddingLeft: '4%',
    fontSize: height*0.021,
  },
  textoItemRefeicao:{
    fontSize: height*0.021,
    fontWeight: '700',
  },
  viewDescricaoRefeicao:{
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '6%',  
  },
  viewHorarioRefeicao:{
    paddingTop: '1%',
    paddingBottom: '1%',
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: '6%',
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
  },
  viewTituloRefeicao:{
    paddingTop: '2%',
    paddingBottom: '2%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
  },
  tituloRefeicao:{
    fontWeight: '700',
    fontSize: height*0.026,
  },
  CardCardapio:{
        width: width*0.4172,
        height: height*0.5325,
        marginTop: '3%',
        marginLeft: (width*0.0421)/4,
        marginRight: (width*0.0421)/4,
        borderRadius: '2%',
        borderColor: '#9C9C9C',
        borderWidth:1,
    }
  });
  

export default CardCardapioItem;
