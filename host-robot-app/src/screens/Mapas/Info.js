import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import Accordion from '../../components/Accordion';

const { width, height } = Dimensions.get('window');

export default function Info() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ScrollView style={{flex: 1, marginTop: height*0.12}}>
          {/* <Text style={styles.titulo}>Tem dúvida sobre qual o propósito de algum local? </Text> */}
          <Accordion title="LE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Suporte" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="PPG-CC" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Espaço Maker" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Auditório" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Copa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Lig" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Reuniões" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Chefia" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Graduação" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Recepção" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
          <Accordion title="Home" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit finibus nisl quis accumsan. Vivamus mollis ligula sed pellentesque blandit. Morbi vel lorem sit amet sapien vestibulum tempus. Aliquam scelerisque, ipsum ac fermentum convallis, dui eros varius arcu, nec rutrum risus leo vitae orci."/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
