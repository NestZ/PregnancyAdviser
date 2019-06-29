import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

export default class Musiclist extends React.Component   {
  playsound1(){
    SoundPlayer.playSoundFile('baller','mp3')
    SoundPlayer.setVolume(100)
  }
  playsound2(){
    SoundPlayer.playSoundFile('paenaijai','mp3')
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
        <ScrollView>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound1()}>
            <Text style={styles.buttonText}> Baller </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound2()}>
            <Text style={styles.buttonText}> แผลในใจ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
            <Text style={styles.buttonText}> ยังไม่มีเพลง3 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>null}>
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
          </TouchableOpacity>
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
      backgroundColor: "#00d0cb",
      borderWidth: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      padding: 10,
  },
  buttonText:{
      fontSize: 16,
  },
  row:{
    justifyContent: 'center',
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
})


/*
import SoundPlayer from 'react-native-sound-player'
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View,} from 'react-native';
const styles = StyleSheet.create({  
  background:{
    backgroundColor: "#ff0000",
  },
  button:{
    backgroundColor: "#00d0cb",
    borderWidth: 1,
    padding: 10,
    textAlign: 'left',
    color: "#000000",
  },
  button1:{
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#00ecb5",
    textAlign: 'center',
    color: '#000000',
  },
  text:{
    fontSize: 15,
  },
  row:{
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
class Musiclist extends React.Component{
  playsound1(){
    SoundPlayer.playSoundFile('baller','mp3')
  }
  playsound2(){
    SoundPlayer.playSoundFile('paenaijai','mp3')
  }
  render() {
    return (
      <View style={styles.background}>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound1()}>
            <Text style={styles.text}> Baller </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>this.playsound2()}>
            <Text style={styles.text}> แผลในใจ </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1} onPress={()=>SoundPlayer.resume()}>
            <Text style={styles.text}> RESUME </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={()=>SoundPlayer.pause()}>
            <Text style={styles.text}> PAUSE </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={()=>SoundPlayer.stop()}>
            <Text style={styles.text}> STOP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Musiclist; */