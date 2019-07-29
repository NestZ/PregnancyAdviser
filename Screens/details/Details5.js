import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

class Details5 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
  <ImageBackground
    style={{width: '100%', height: '100%'}}
    source={require('../img/a.png')}
>
    <View>
      <View style={styles.header}> 
          <Text style={styles.headerText}> การแปลผลลูกดื้น </Text>
      </View>
      <Text style={styles.Text}>      ถ้าลูกในท้องดิ้นครบ 10 ครั้ง ใน 30 นาที แสดงว่า ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ มีพัฒนาการ </Text>
      <Text style={styles.Text}>การเจริญเติบโตที่ดี (แปลผล) แต่ถ้าลูกในท้องดิ้นน้อยกว่า 10 ครั้ง ใน 30 นาที ให้นับต่อไปอีกจนครบ 12 </Text>
	    <Text style={styles.Text}>ชั่วโมง หากลูกยังดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง </Text>
      <Text style={styles.Text}>แสดงว่าลูกในท้องมีความผิดปกติควรรีบมาพบแพทย์ (แปลผล) </Text>
    </View>
  </ImageBackground>
  );
  }
}

export default Details5;

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: "#ffcc99",
  },
  header:{
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    color: 'white',
    fontSize: 20,
    padding: 15,
  },
  Text:{
    fontSize: 18,
  },
})