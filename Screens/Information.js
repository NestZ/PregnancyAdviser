import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Alert } from 'react-native';

export default class Information extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header:() => null
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.headerText}> INFORMATIONS </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('homedetails')}>
          <Text style={styles.buttonText}> รายละเอียด </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Musiclist')}>
          <Text style={styles.buttonText}> เพลง </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('testlocal')}>
          <Text style={styles.buttonText}> etc1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{Alert.alert("etc2")}}>
          <Text style={styles.buttonText}> etc2 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: "#00d0cb",
    borderWidth: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText:{
    fontSize: 16,
  },
  headerText:{
    color: 'white',
    fontSize: 18,
    padding: 15,
  },
})
