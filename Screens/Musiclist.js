import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

export default class Musiclist extends React.Component   {
  playsound1(){
    SoundPlayer.playSoundFile('p1','ogg')
  }
  playsound2(){
    SoundPlayer.playSoundFile('p2','ogg')
  }
  playsound3(){
    SoundPlayer.playSoundFile('p3','ogg')
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> MUSICLIST </Text>
        </View>
        <ScrollView style={styles.background}>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound1()}>
            <Text style={styles.buttonText}> โมสาร์ท พัฒนาสมอง1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound2()}>
            <Text style={styles.buttonText}> โมสาร์ท พัฒนาสมอง2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound3()}>
            <Text style={styles.buttonText}> โมสาร์ท พัฒนาสมอง3 </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง5 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง6 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง7 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง8 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง9 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง10 </Text>
          </TouchableOpacity> */}
        </ScrollView>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>SoundPlayer.resume()}>
            <Text style={styles.buttonText}> RESUME </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>SoundPlayer.pause()}>
            <Text style={styles.buttonText}> PAUSE </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>SoundPlayer.stop()}>
            <Text style={styles.buttonText}> STOP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    color: 'white',
    fontSize: 18,
    padding: 15,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:10,
  },
  button:{
      borderWidth: 1,
      backgroundColor: '#ffcc99',
      alignItems: 'center',
      padding: 10,
  },
  buttonText:{
      fontSize: 16,
  },
  row:{
    justifyContent: 'center',
    backgroundColor: '#ff6699',
    flexDirection: 'row',
  },
  background:{
    backgroundColor: "#ff99cc",
  },
})
