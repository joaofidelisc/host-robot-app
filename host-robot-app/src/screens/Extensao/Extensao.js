import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



import Card from '../../components/Card.js';

const { width, height } = Dimensions.get('window');

export default function Extensao() {

  useEffect(()=>{
    console.log("Altura:", height);
    console.log("Largura:", width);
  })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Estes são os grupos de extensão relacionados ao departamento</Text>
      <Text style={[styles.titulo, {top:height*0.12}]}>Clique em algum e conheça mais sobre ele!</Text>
      <View style={{flexDirection:'row'}}>
        <Card
          imageSource={require('../../assets/Cards_Extensao/CATIJr.png')}
          cardTitle="CATI Jr."
          cardText={'Empresa Júnior.\nTrabalham com desenvolvimento de software.'}
          screenName="Grupos de extensão - CATI Jr."
          />
        <Card
          imageSource={require('../../assets/Cards_Extensao/GAMSo.png')}
          cardTitle="GAMSo"
          cardText={'Grupo de criação de jogos da UFSCar. Buscam incentivar a criatividade.'}
          screenName="Grupos de extensão - GAMSo"
          />
        <Card
          imageSource={require('../../assets/Cards_Extensao/MAU.png')}
          cardTitle="M@U"
          cardText={'Grupo de estudos para a Maratona de Programação, uma competição regional.'}
          screenName="Grupos de extensão - M@U"
          />
        <Card
          imageSource={require('../../assets/Cards_Extensao/PET_BCC.png')}
          cardTitle="PET BCC"
          cardText={'PET do curso de Bacharelado em Ciência da Computação. Desenvolvem projetos.'}
          screenName="Grupos de extensão - PET BCC"
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
  titulo: {
    position: 'absolute',
    top: height*0.08,
    color: '#1C1B1F',
    fontWeight: 'bold',
    fontSize: height*0.035,
    marginBottom: height*0.09,
    marginRigth: width*0.495,
    alignContent:'center',
  },
  containerStyle:{
    position: 'absolute',
    width: width*0.1817,
    right: '2%',
    top: height*0.1,
  }
});

