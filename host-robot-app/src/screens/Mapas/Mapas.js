import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Mapas() {
  
  const chamadaAPI = async() => {
    console.log('Chamando API...');
    fetch('http://192.168.137.14:5000/ros/goTo/LE-1').catch((error)=> console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text>Mapas</Text>
      <TouchableOpacity
        onPress={chamadaAPI}
      >
        <Text>Chamada API</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
});
