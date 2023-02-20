import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Card from '../../components/Card.js';


export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card
        imageSource={require('../../assets/Cards_Home/Cardapio.png')}
        cardTitle="Cardápio"
        cardText={'Aqui você consegue consultar os horários das refeições e o cardápio também!'}
        screenName="Cardápio"
      />
      <Card
        imageSource={require('../../assets/Cards_Home/GruposExtensao.png')}
        cardTitle="Grupos de extensão"
        cardText={'Aqui você encontra informações sobre os grupos de extensão disponíveis.'}
        screenName="Grupos de extensão"
      />
      <Card
        imageSource={require('../../assets/Cards_Home/Eventos.png')}
        cardTitle="Eventos"
        cardText={'Que tal ficar por dentro dos eventos do departamento e da universidade?'}
        screenName="Eventos"
      />
      <Card
        imageSource={require('../../assets/Cards_Home/MapaDC.png')}
        cardTitle="Mapa DC"
        cardText={'Descupa informações como onde fazer sua refeição, sanitários e salas de aulas.'}
        screenName="Mapa DC"
      />
      <Card
        imageSource={require('../../assets/Cards_Home/HorarioAula.png')}
        cardTitle="Horário das aulas"
        cardText={'Para onde vai agora?\nConfirme o horário das suas aulas e o local também!'}
        screenName="Horário das aulas"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',


  },
});
