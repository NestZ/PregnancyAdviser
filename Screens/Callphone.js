import React from 'react';
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native';
import {Linking} from 'react-native'
import call from 'react-native-phone-call';
import {ListItem} from 'react-native-elements';
const list = [
  {
    name: 'แจ้งเหตุด่วน เหตุร้าย (191)',
    phoneNumber : 'tel:${191}'
  },
  {
    name: 'สถาบันการแพทย์ฉุกเฉิน(1669)',
    phoneNumber : 'tel:${1669}'
  },
  {
    name: 'หน่วยแพทย์กู้ชีพ (1554)',
    phoneNumber :'tel:${1554}'
  },
]
// const 
//   Emer191 = {
//     number: '191', 
//     prompt: false  
//   },
//   Emer1669 = {
//       number: '1669',
//       prompt: false
//   },
//   Emer1554 = {
//       number: '1554',
//       prompt: false
//   }


 

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
          { list.map((l, i) => (
         <ListItem
          key={i}
          title={l.name}
          onPress={()=>Linking.openURL(l.phoneNumber)}
          /> ))}
</View>
            // <View>
            //     <View style={styles.header}>
            //         <Text style={styles.headerText}> เบอร์ฉุกเฉิน </Text>
            //     </View>
            //     <TouchableOpacity style={styles.button} onPress={()=>call(Emer191).catch(console.error)}>
            //         <Text style={styles.buttonText}> แจ้งเหตุด่วน เหตุร้าย (191) </Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity style={styles.button} onPress={()=>call(Emer1669).catch(console.error)}>
            //         <Text style={styles.buttonText}> สถาบันการแพทย์ฉุกเฉิน (1669)</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity style={styles.button} onPress={()=>call(Emer1554).catch(console.error)}>
            //         <Text style={styles.buttonText}> หน่วยแพทย์กู้ชีพ (1554)</Text>
            //     </TouchableOpacity>
            // </View>
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