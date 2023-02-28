import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Card from '../../components/Card.js';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const [idioma, setIdioma] = useState('PT-BR');
  const [index, setIndex] = useState(0);

  // useEffect(()=>{
  //   // console.log('Teste....\n\n');
  //   // console.log('Dimensões da tela:', width, height);
  //   // console.log('IDIOMA:', idioma);
  // }, [idioma]);

  useEffect(()=>{
    console.log('Altura:', height);
    console.log('Largura:', width);
  })


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        {/* <Text style={styles.titulo}>Olá visitante, no que posso ajudar hoje?</Text> */}
        <SegmentedControlTab
          values={["Português", "English"]}
          onTabPress={()=>{
            if (idioma == 'PT-BR'){
              setIdioma('ENG');
              setIndex(1);
            }else{
              setIdioma('PT-BR');
              setIndex(0);
            }
          }}
          selectedIndex={index}
          tabsContainerStyle={styles.containerStyle}
          activeTabTextStyle={{color:'#FFFFFF'}}    
          tabTextStyle={{color: '#E6E1E5'}}
              
        />
        {
          idioma=='PT-BR' &&
          <>
          <Text style={styles.titulo}>Olá visitante, no que posso ajudar hoje?</Text>
          <View style={{flex: 1, flexDirection: 'row', top: height*0.225}}>
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
              cardText={'Descubra informações como onde fazer sua refeição, sanitários e salas de aulas.'}
              screenName="Mapa DC"
              />
            <Card
              imageSource={require('../../assets/Cards_Home/HorarioAula.png')}
              cardTitle="Horário das aulas"
              cardText={'Para onde vai agora?\nConfirme o horário das suas aulas e o local também!'}
              screenName="Horário das aulas"
              />
          </View>
        </>
        }
         {
           idioma=='ENG' &&
           <>
           <Text style={styles.titulo}>Hi, How Can I help you today?</Text>
          <View style={{flex: 1, flexDirection: 'row', top: height*0.225}}>
            <Card
              imageSource={require('../../assets/Cards_Home/Cardapio.png')}
              cardTitle="Menu"
              cardText={'Here you can look for the opening hours of the restaurant and also the menu!'}
              screenName="Cardápio"
              />
            <Card
              imageSource={require('../../assets/Cards_Home/GruposExtensao.png')}
              cardTitle="Extension Groups"
              cardText={'Here you find information about available extension groups!'}
              screenName="Grupos de extensão"
              />
            <Card
              imageSource={require('../../assets/Cards_Home/Eventos.png')}
              cardTitle="Events"
              cardText={'Do you want to find out about the events happening in the University?'}
              screenName="Eventos"
              />
            <Card
              imageSource={require('../../assets/Cards_Home/MapaDC.png')}
              cardTitle="DC Map"
              cardText={'Find out information about where to eat your meals, bathrooms and classrooms.'}
              screenName="Mapa DC"
              />
            <Card
              imageSource={require('../../assets/Cards_Home/HorarioAula.png')}
              cardTitle="Class Times"
              cardText={'Where are you going to now?\nConfirm the times of your classes and also the place.'}
              screenName="Horário das aulas"
            />
          </View>
          </>
        }
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
  titulo: {
    position: 'absolute',
    color: '#1C1B1F',
    fontWeight: '600',
    fontSize: height*0.035,
    marginBottom: height*0.09,
    marginRigth: width*0.495,
    top: height*0.12,
    left: '2%'
  },
  containerStyle:{
    position: 'absolute',
    width: width*0.1817,
    right: '2%',
    top: height*0.1,
  }
});
