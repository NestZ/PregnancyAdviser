import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

class Details4 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <View>
        <View style={styles.header}> 
          <Text style={styles.headerText}> วิธีการนับลูกดิ้น </Text>
        </View>
        <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../img/a.png')}
            >
          
        <View>
            <Text style={styles.Text}>    การนับลูกดิ้นจนครบ 10 ครั้ง (Count-to-ten) คือ การนับจำนวนลูกดิ้นอย่างต่อเนื่องไปจนครบ 10 ครั้งใน 12 </Text>
            <Text style={styles.Text}>ชั่วโมง ซึ่งปกติลูกจะดิ้นครบ 10 ครั้ง ในเวลา 20-30 </Text>
            <Text style={styles.Text}>นาที ถ้าไม่ครบให้นับต่อไปจนครบ 12 ชั่วโมง หากลูกยัง </Text>
            <Text style={styles.Text}>ดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง ถือว่าผิดปกติ ควรรีบ </Text>
            <Text style={styles.Text}>มาโรงพยาบาลทันที </Text>
        </View>
        </ImageBackground>
    </View>
  );
  }
}

export default Details4;

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
