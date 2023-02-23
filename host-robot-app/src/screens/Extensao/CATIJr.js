import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CATIJr() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../../assets/Cards_Extensao/CATIJr.png')}
        style={styles.imageGrupo}
      />
      <Text style={styles.titulo}>A empresa júnior de computação da UFSCar!</Text>        
      <View style={styles.viewTextoDescricao}>
        <Text style={styles.corpoTexto}>{`- Empresa formada apenas por alunos de graduação de todos\nos cursos da UFSCar com interesse na área de tecnologia;`}</Text>
        <Text style={styles.corpoTexto}>{`- Aqui você tem a oportunidade de aprender a desenvolver\nsoftware com as novas tecnologias do mercado;`}</Text>
        <Text style={styles.corpoTexto}>{`- 6 possíveis áreas para trabalhar, sendo essas: Comercial,\nMarketing, Operações, Qualidade, Produtos e Presidência.`}</Text>
      </View>  
      <Image
        source={require('../../assets/icons/whatsapp.png')}
        style={styles.redeSocial}
      />
      <Text style={[styles.corpoTexto, {position: 'absolute', top: '54%', left: '9.5%'}]}>{`+55 12 98116-4454`}</Text>
      <Image
        source={require('../../assets/icons/instagram.png')}
        style={[styles.redeSocial, {top:'59%'}]}
        />
      <Text style={[styles.corpoTexto, {position: 'absolute', top: '63%', left: '9.5%'}]}>{`@cati.jr`}</Text>
      <Image
        source={require('../../assets/icons/facebook.png')}
        style={[styles.redeSocial, {top:'68%'}]}
        />
      <Text style={[styles.corpoTexto, {position: 'absolute', top: '72%', left: '9.5%'}]}>{`www.facebook.com/catijr`}</Text>
      <Image
        source={require('../../assets/icons/linkedin.png')}
        style={[styles.redeSocial, {top:'77%'}]}
        />
      <Text style={[styles.corpoTexto, {position: 'absolute', top: '81%', left: '9.5%'}]}>{`www.linkedin.com/company/cati-jr/`}</Text>
      <Image
        source={require('../../assets/icons/website.png')}
        style={[styles.redeSocial, {top:'86%'}]}
      />
      <Text style={[styles.corpoTexto, {position: 'absolute', top: '89%', left: '9.5%'}]}>{`www.catijr.com.br`}</Text>
      <View style={{position: 'absolute', top: '59%', left: '63.67%', alignItems:'center'}}>
        <Text style={[styles.corpoTexto, {fontSize: height*0.035, fontWeight: 'bold'}]}>Processo seletivo</Text>
        <Text style={[styles.corpoTexto]}>Junho 2023</Text>
        <Text style={[styles.corpoTexto]}>Dezembro 2023</Text>
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
  imageGrupo:{
    width: width*0.2820,
    height: height*0.2620,
    resizeMode: 'contain',
    position: 'absolute',
    top: height*0.08,
    left: '4.45%'
  },
  redeSocial:{
    width: width*0.04075,
    heigth: width*0.04075,
    resizeMode: 'contain',
    position: 'absolute',
    top: '50%',
    left: '4.45%'
  },
  titulo: {
    position: 'absolute',
    top: height*0.08,
    left: '39.8%',
    color: '#1C1B1F',
    fontWeight: 'bold',
    fontSize: height*0.035,
  },
  viewTextoDescricao:{
    position: 'absolute',
    top: height*0.16,
    left: '39.8%',
  },
  corpoTexto:{
    textAlign: 'left',
    color: '#1C1B1F',
    fontSize: height*0.025,
  }
});

//774


