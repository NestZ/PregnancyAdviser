import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Musiclist extends React.Component   {
  constructor() {
    super();
    this.state = {
      toggle: false,
      textValue: 'control-play',
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
    this.setState({textValue:"control-pause"});
   }
   else if(this.state.status=="pause"||this.state.status=="stop"){
     
     this.setState({textValue:"control-play"});
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
            <Text style={styles.buttonText}> <Icon name='music-tone' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง1 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 1 ? (
        <View style={{position:"absolute",right:40,paddingTop:15,}}>
           <Icon name='control-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
              <TouchableOpacity style={styles.button} onPress={()=>this.playpause(2)}>
            <Text style={styles.buttonText}> <Icon name='music-tone' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง2 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 2 ? (
        <View style={{position:"absolute",right:40,paddingTop:80,}}>
           <Icon name='control-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
            <TouchableOpacity style={styles.button} onPress={()=>this.playpause(3)}>
            <Text style={styles.buttonText}> <Icon name='music-tone' size={30} color="#f589e1"></Icon> โมสาร์ท พัฒนาสมอง3 </Text>
          </TouchableOpacity>
          {this.state.nowPlay == 3 ? (
        <View style={{position:"absolute",right:40,paddingTop:145,}}>
           <Icon name='control-play' size={30} color="#00ff62"></Icon>
        </View>
          ):null}
        </ScrollView>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button3} onPress={()=>this.nextback(0)}>
            <Icon name="control-rewind" size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.playpause(1)}>
            <Icon name={this.state.textValue} size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.stop()}>
            <Icon name='close' size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={()=>this.nextback(1)}>
            <Icon name="control-forward" size={60} color="#55b5fa"></Icon>
          </TouchableOpacity>
          
        </View>
        <Text>{this.state.nowPlay}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ddd'
  },
  headerText:{
    color: '#f5424e',
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
    borderBottomWidth: 2,
    backgroundColor:"white",
    fontSize:18,
    color:"white",
    textAlign :'center',
    width:'100%',
    justifyContent:'center',
    alignSelf:'center',
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
  background:{
    backgroundColor: "white",
  },
})
