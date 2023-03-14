import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const { width, height } = Dimensions.get('window');

export default function Mapas() {
  const [selectedLocal, setSelectedLocal] = useState('empty');

  const goToLocal = async() => {
    console.log("goToLocal");
    if (selectedLocal != 'empty'){
      try{
        fetch(`http://192.168.0.200:5000/ros/goTo/${selectedLocal}`)
      }catch(error){
        console.log(error.code);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Selecione na lista abaixo um local que você deseja que o robô te guie!</Text>
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
      <View style={{justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity
          onPress={goToLocal}
          style={styles.button}
        >
          <Text style={styles.textoBotaoMeLeve}> Me leve até lá</Text>
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
    marginRigth: width*0.495,
    top: height*0.12,
    left: '2%'
  },
  dropDown: {
    backgroundColor: 'white',
    height: '60%',
    width: '40%'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#4d94dd',
    padding: 15,
    borderRadius: 25,
  },
  textoBotaoMeLeve:{
    color: '#FFFFFF',
  }
});