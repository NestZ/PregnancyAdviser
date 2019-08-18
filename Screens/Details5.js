import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
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
          <Text style={styles.headerText}> การแปลผลลูกดิ้น </Text>
      </View>
      <View style={styles.frame}>
      <Text style={styles.Text}>      ถ้าลูกในท้องดิ้นครบ 10 ครั้ง ใน 30 นาที แสดงว่า    ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ มีพัฒนาการ </Text>
      <Text style={styles.Text}>การเจริญเติบโตที่ดี (แปลผล) แต่ถ้าลูกในท้องดิ้น         น้อยกว่า 10 ครั้ง ใน 30 นาที ให้นับต่อไปอีกจนครบ  </Text>
	    <Text style={styles.Text}>12ชั่วโมง หากลูกยังดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง </Text>
      <Text style={styles.Text}>แสดงว่าลูกในท้องมีความผิดปกติควรรีบมาพบแพทย์ (แปลผล) </Text>
      <View style={styles.resize}>
              <Image
                 style={{width: 200, height: 200,}}
                 source={require('./img/baby.png')}>
             </Image>
      </View>
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
    fontSize: 33,
    padding: 15,
    fontFamily: "SB - Modern"
  },
  Text:{
    fontSize: responsiveFontSize(2.75),
    fontFamily: "SB - Modern"
  },
  resize:{
    alignItems:"center",
    paddingTop:60
  },
  frame:{
    padding:20,
  }
})