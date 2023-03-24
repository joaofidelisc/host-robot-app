import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

export default function Mapas({navigation}) {
  const [selectedLocal, setSelectedLocal] = useState('LE-1');
  // const [modalVisible, setModalVisible] = useState(true);

  const goToLocal = async() => {
    fetch(`http://192.168.1.100:5000/ros/goTo/${selectedLocal}`)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Para onde você deseja ir?</Text>
      <Picker
        style={styles.dropDown}
        selectedValue={selectedLocal}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLocal(itemValue)
      }>
        <Picker.Item label="LE-1" value="LE-1" />
        <Picker.Item label="LE-2" value="LE-2" />
        <Picker.Item label="LE-3" value="LE-3" />
        <Picker.Item label="LE-4" value="LE-4" />
        <Picker.Item label="LE-5" value="LE-5" />
        <Picker.Item label="Suporte" value="Suporte" />
        <Picker.Item label="PPG-CC4" value="PPG-CC4" />
        <Picker.Item label="Espaço Maker" value="Maker" />
        <Picker.Item label="Auditorio" value="Auditorio" />
        <Picker.Item label="Banheiros" value="Banheiros" />
        <Picker.Item label="Copa" value="Copa" />
        <Picker.Item label="Lig" value="Lig" />
        <Picker.Item label="Reuniões" value="Reunioes" />
        <Picker.Item label="Chefia" value="Chefia" />
        <Picker.Item label="Graduação" value="Graduacao" />
        <Picker.Item label="Recepção" value="Recepcao" />
        <Picker.Item label="Home" value="Home" />
      </Picker>
      <View style={{justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
        <TouchableOpacity
          onPress={goToLocal}
          style={styles.buttonMeLeve}
        >
          <Text style={styles.textoBotaoMeLeve}>Me leve até lá</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Mapa DC - Informações');
          }}
          style={[styles.buttonMeLeve, {marginHorizontal: '2%'}]}
        >
          <Text style={styles.textoBotaoMeLeve}>Preciso de ajuda</Text>
        </TouchableOpacity>
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
    color: '#1C1B1F',
    fontWeight: '600',
    fontSize: height*0.035,
    marginBottom: height*0.09,
    marginRight: width*0.495,
    top: height*0.12,
    left: '2%'
  },
  dropDown: {
    backgroundColor: 'white',
    height: '60%',
    width: '40%'
  },
  buttonMeLeve:{
    backgroundColor: '#4d94dd',
    padding: 15,
    borderRadius: 25,
  },
  textoBotaoMeLeve:{
    color: '#FFFFFF',
  },
  buttonInfo:{
    backgroundColor: '#4d94dd',
    width: '20%',
    height: '10%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10
  },
  textButtonInfo:{
    color: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});