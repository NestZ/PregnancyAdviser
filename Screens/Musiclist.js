import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';

export default class Musiclist extends React.Component   {
  constructor() {
    super();
    this.state = {
      toggle: false,
      textValue: 'controller-play',
      nowPlay: -1,
      status: "stop",
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  playpause = async(index) => {
    if(this.state.status == "stop"){
      SoundPlayer.playSoundFile("p" + String(index),"ogg");
      await this.setState({nowPlay:index});
      await this.setState({status:"play"});
    }
    else if(this.state.status == "play"){
      SoundPlayer.pause();
      await this.setState({status:"pause"});
      await this.setState({nowPlay:-1});
    }
    else {
      SoundPlayer.resume();
      await this.setState({status:"play"});
      await this.setState({nowPlay:index});
    }
    this.updaticon();
  }
 stop = async() => {
   if(this.state.status =="play"){
     SoundPlayer.stop();
     await this.setState({status:"stop"});
     await this.setState({nowPlay:-1});
   }
   this.updaticon();
 }
 updaticon(){
   if(this.state.status=="play"){
    this.setState({textValue:"controller-paus"});
   }
   else if(this.state.status=="pause"||this.state.status=="stop"){
     
     this.setState({textValue:"controller-play"});
   }
 }
nextback = async(nb) => {
  if(this.state.status == "play"){
  let temp = this.state.nowPlay;
  if(nb){
    if(this.state.nowPlay==3){
       temp = 1;
    }
    else{
    temp++;
  }
  }
  else{
      if(this.state.nowPlay==1){
         temp = 3;
      }
      else {
       temp--;
    }
  }
  await this.stop();
  await this.setState({nowPlay:temp});
  this.playpause(this.state.nowPlay);
}
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> MUSICLIST </Text>
        </View>
        <ScrollView style={styles.background}>
          <TouchableOpacity style={styles.button} onPress={()=>this.playpause(1)}>
            <Text style={styles.buttonText}> <Icon name='note' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง1 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 1 ? (
        <View style={{position:"absolute",right:40,paddingTop:15,}}>
           <Icon name='controller-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
              <TouchableOpacity style={styles.button} onPress={()=>this.playpause(2)}>
            <Text style={styles.buttonText}> <Icon name='note' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง2 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 2 ? (
        <View style={{position:"absolute",right:40,paddingTop:80,}}>
           <Icon name='controller-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
            <TouchableOpacity style={styles.button} onPress={()=>this.playpause(3)}>
            <Text style={styles.buttonText}> <Icon name='note' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง3 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 3 ? (
        <View style={{position:"absolute",right:40,paddingTop:145,}}>
           <Icon name='controller-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
        </ScrollView>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button3} onPress={()=>this.nextback(0)}>
            <Icon name="controller-fast-backward" size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.playpause(1)}>
            <Icon name={this.state.textValue} size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.stop()}>
            <Icon name='controller-stop' size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={()=>this.nextback(1)}>
            <Icon name="controller-fast-forward" size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#8ef5d1",
  },
  header:{
    backgroundColor: '#f5424e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    color: 'white',
    fontSize: 20,
    padding: 13
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
    padding: 15,
    borderBottomWidth: 1,
    fontSize:18,
    textAlign :'center',
    width:'100%',
    justifyContent:'center',
    alignSelf:'center',
    borderColor:"gray"
  },
  buntton2:{
    borderWidth: 1,
    backgroundColor: '#ffcc99',
    position:"absolute",
    alignItems:"center",
  },
  button3:{
    right:20,
  },
  button4:{
    left:20,
  },
  buttonText:{
      fontSize: 16,
  },
  row:{
    position:"relative",
    // backgroundColor: '#ff6699',
    flexDirection:"row",
   justifyContent: "center",
    
  },
})