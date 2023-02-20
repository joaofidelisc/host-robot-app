import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SelecaoCardapioItem = (props) => {
  const navigation = useNavigation();

//   useEffect(()=>{
//   })

  return (
    <View style={styles.viewCardapioItem}>
      <Text style={styles.textoDiaSemana}>
        {props.diaSemana}
      </Text>
      <TouchableOpacity style={styles.cardapioSelecao}>
        <Text style={styles.textSelecao}>
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
    cardapioSelecao:{
        marginTop:4,
        justifyContent:'center',
        alignItems:'center',
        width: 30, 
        height: 30,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
    },
    textSelecao:{
        
        color: '#4D94DD',
        //margin:3,
    },
    textoDiaSemana:{
        fontWeight: '600',
        color:'#FFFFFF',
    },
    viewCardapioItem:{
        alignItems: 'center',
        width: width*0.0546875,
        height: height*0.0875,
    }
});  

export default SelecaoCardapioItem;
