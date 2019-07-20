import React from 'react';
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native';
import call from 'react-native-phone-call';

const Emer191 = {
    number: '191', 
    prompt: false  
  },
  Emer1669 = {
      number: '1669',
      prompt: false
  },
  Emer1554 = {
      number: '1554',
      prompt: false
  }


export default class Callphone extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
           header: () => null
        } 
      }
    render () {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}> เบอร์ฉุกเฉิน </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>call(Emer191).catch(console.error)}>
                    <Text style={styles.buttonText}> แจ้งเหตุด่วน เหตุร้าย (191) </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>call(Emer1669).catch(console.error)}>
                    <Text style={styles.buttonText}> สถาบันการแพทย์ฉุกเฉิน (1669)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>call(Emer1554).catch(console.error)}>
                    <Text style={styles.buttonText}> หน่วยแพทย์กู้ชีพ (1554)</Text>
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
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  })