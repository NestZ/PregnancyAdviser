import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

class Details1 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
          <Text style={styles.headerText}> การนับลูกดิ้น </Text>
      </View>
      <View style={styles.frame}>
        <Text style={styles.Text}>            ถือเป็นวิธีการประเมินสุขภาพลูกในท้อง ที่คุณแม่สามารถประเมินสุขภาพลูกน้อยในท้องและปฏิบัติได้ </Text>
        <Text style={styles.Text}>ด้วยตนเอง  และช่วยเฝ้าระวังเกี่ยวกับภาวะอันตรายลูกในท้องซึ่งจะมีการเปลี่ยนแปลงพฤติกรรม การดิ้นที่คุณ</Text>
        <Text style={styles.Text}>แม่สามารถสังเกตได้ ดังนั้นเมื่อคุณแม่อายุครรภ์เข้าสู่ 32 สัปดาห์ขึ้นไป ควรนับลูกดิ้นทุกวันโดยเฉพาะในคุณ </Text>
        <Text style={styles.Text}>แม่ที่ได้รับการวินิจฉัยว่าตั้งครรภ์เสี่ยงสูง </Text>
      </View>
    </View>
  );
  }
}

export default Details1;

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 18
  },
  frame:{
    backgroundColor: "white"
  }
})