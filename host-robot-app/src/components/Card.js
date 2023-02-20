import React, {useEffect} from 'react';


import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const cardWidth = width*0.1772;
const cardHeight = height*0.4263;

const Card = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate(props.screenName)}
        style={{width: cardWidth, height: cardHeight, margin: '1%'}}
    >
      <View style={styles.card}>
        <Image source={props.imageSource} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{props.cardTitle}</Text>
        <Text style={styles.cardText}>{props.cardText}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      shadowColor: '#000',
      backgroundColor: '#FFFFFF',
      borderColor: '#9C9C9C',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      borderRadius: 20,
    },
    cardImage: {
      width: '100%',
      height: '58.94%',
      borderRadius: 50
    },
    cardTitle: {
      fontSize: cardHeight*0.0604,
      fontWeight: '400',
      marginTop: cardHeight*0.01026,
      marginLeft: cardHeight*0.0293,
      marginRight: cardHeight*0.0293,
      marginBottom: cardHeight*0.01026
    },
    cardText: {
      fontSize: cardHeight*0.0504,
      fontWeight: '400',      
      marginLeft: cardHeight*0.0293,
      marginRight: cardHeight*0.0293,
      marginBottom: cardHeight*0.06457,
      textAlign:'left'
    },
  });
  

export default Card;
