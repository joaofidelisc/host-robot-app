import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');


const Accordion = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity 
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.row}  
      >
        <Text style={[styles.title]}>{props.title}</Text>
        <Icon name={isCollapsed ? "arrow-drop-down" : "arrow-drop-up"} size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.parentHr}/>
      {
      !isCollapsed && 
        <View style={styles.child}>
            <Text style={{color:'black', fontSize: height*0.025}}>{props.content}</Text>
        </View>
      }
    </View>
  );
};


const styles = StyleSheet.create({
    title:{
        fontSize: height*0.035,
        fontWeight:'700',
        color: 'white',
        marginLeft: '2%'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:height*0.08,
        width: width*0.95,
        alignItems:'center',
        backgroundColor: '#4d94dd',
        borderRadius: 10,
        marginTop: '0.5%',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        borderWidth: 1,
        borderRadius: 10,
        padding:16,
    }
});


export default Accordion;
