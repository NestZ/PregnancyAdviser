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
          <Text style={styles.headerText}> Informations </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Details1')}>
          <Text style={styles.buttonText}> ความสำคัญของการนับลูกดิ้น </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Details2')}>
          <Text style={styles.buttonText}> อาการลูกดิ้นที่ผิดปกติ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Details3')}>
          <Text style={styles.buttonText}> รูปแบบการดิ้นของลูกในครรภ์ตามอายุครรภ์ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Details4')}>
          <Text style={styles.buttonText}> วิธีการนับลูกดิ้น </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Details5')}>
          <Text style={styles.buttonText}> การแปลผลลูกดิ้น </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Musiclist')}>
          <Text style={styles.buttonText}> เพลงเสริมพัฒนาการ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigate('Callphone')}>
          <Text style={styles.buttonText}> เบอร์โทรที่ใช้ติดต่อยามฉุกเฉิน </Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
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
    color: '#f5424e',
    fontSize: 18,
    padding: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})