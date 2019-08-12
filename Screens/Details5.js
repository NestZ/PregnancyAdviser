import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Details5 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
   <ScrollView style={{backgroundColor:"#f6ebff"}}>
    <View>
      <View style={styles.header}> 
          <Text style={styles.headerText}> การแปลผลลูกดื้น </Text>
      </View>
      <Text style={styles.Text}>      ถ้าลูกในท้องดิ้นครบ 10 ครั้ง ใน 30 นาที แสดงว่า ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ มีพัฒนาการ </Text>
      <Text style={styles.Text}>การเจริญเติบโตที่ดี (แปลผล) แต่ถ้าลูกในท้องดิ้นน้อยกว่า 10 ครั้ง ใน 30 นาที ให้นับต่อไปอีกจนครบ 12 </Text>
	    <Text style={styles.Text}>ชั่วโมง หากลูกยังดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง </Text>
      <Text style={styles.Text}>แสดงว่าลูกในท้องมีความผิดปกติควรรีบมาพบแพทย์ (แปลผล) </Text>
      <View style={styles.resize}>
              <Image
                 style={{width: 200, height: 200,}}
                 source={require('./img/baby.png')}> 
             </Image>
      </View>
    </View>
    </ScrollView> 
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
    backgroundColor: '#f5424e',
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
  resize:{
    alignItems:"center",
    paddingTop:60
  }
})