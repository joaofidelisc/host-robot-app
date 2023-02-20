import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import SelecaoCardapioItem from '../../components/SelecaoCardapioItem';

const { width, height } = Dimensions.get('window');

export default function Cardapio() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardapioSelecao:{
    backgroundColor: '#000000',
  },
  textSelecao:{
    color: 'red',
  },
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
