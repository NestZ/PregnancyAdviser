import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
class Details2 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <ScrollView style={{backgroundColor:"#ffecd6"}}>
      <View style={styles.header}> 
          <Text style={styles.headerText}> อาการลูกดิ้นที่ผิดปกติ </Text>
      </View>
        <View style={styles.frame}>
          <Text style={styles.Text}>1.ภาวะลูกดิ้นน้อยลง </Text>
          <Text style={styles.Text2}>      ภาวะลูกดิ้นน้อยลง หมายถึง ลูกอยู่ในภาวะอันตราย     มีความเสี่ยงที่จะเสียชีวิตได้ ดังนั้นถ้าหากมารดาพบว่า  </Text>
          <Text style={styles.Text2}>ลูกดิ้นน้อยลงหรือหยุดดิ้นไม่ว่าเป็นเวลาใดของแต่ละวัน          ให้มาพบแพทย์ทันที  </Text>
          <Text style={styles.Text2}>      - ลูกดิ้นน้อยลงและดิ้นเบาๆ อาจเป็นเพราะใน</Text>
          <Text style={styles.Text2}>โพรงมดลูกคับแคบจนกระทั่งลูกเคลื่อนไหวได้ลำบาก </Text>
          <Text style={styles.Text2}>หรือเคลื่อนไหวไม่ได้ หรือว่าเกิดความผิดปกติ </Text>
          <Text style={styles.Text2}>ที่ทำอันตรายกับลูกจนลูกไม่มีแรงจะดิ้น อาจทำให้ลูก        ในท้องเกิดภาวะขาดออกซิเจน การคลอดก่อนกำหนด</Text>
          <Text style={styles.Text2}>  ภาวะเครียดของลูกและลูกเสียชีวิตในครรภ์</Text>
          <Text style={styles.Text2}>ดังนั้นคุณแม่จึงควรบันทึกการดิ้นของลูกในแต่ละวันซึ่งจะช่วยให้พยาบาลแพทย์หรือบุคลากรทางสุขภาพ </Text>
          <Text style={styles.Text2}>สามารถประเมินสุขภาพของลูกในท้องเบื้องต้น</Text>
          <Text style={styles.Text2}>ได้อย่างถูกต้องรวดเร็ว</Text>
          <Text style={styles.Text}>2.ภาวะลูกดิ้นมากผิดปกติ </Text>
          <Text style={styles.Text2}>      ภาวะลูกดิ้นมากผิดปกติ หมายถึงลูกเคลื่อนไหวมากกว่า 40 ครั้งต่อชั่วโมง ในปัจจุบันถือว่าไม่เป็นปัญหา </Text>
          <Text style={styles.Text2}>แต่อย่างใดยังไม่มีการศึกษาที่ระบุว่ามีอันตรายใด ๆ ต่อลูกในท้อง </Text>
          <Text style={styles.Text2}>      - อาการลูกดิ้นมากที่แสดงถึงสัญญาณอันตรายก็คือ ลูกจะดิ้นแรงมากอยู่ระยะหนึ่ง แล้วหยุดดิ้นไปเลยและไม่มี </Text>
          <Text style={styles.Text2}>อาการดิ้นอีกต่อไป นั่นคือลูกในท้องเสียชีวิตแล้ว </Text>
          <View style={styles.resize}>
              <Image
                 style={{width: 200, height: 200,}}
                 source={require('./img/doctor.png')}> 
             </Image>
            </View>
            </View>
    </ScrollView>
  );
  }
}

export default Details2;

const styles = StyleSheet.create ({
  container:{
    flex: 1,
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
  Text2:{
    fontSize: responsiveFontSize(2.75),
    fontFamily: "SB - Modern"
  },
  resize:{
    alignItems:"center",
    paddingTop:40
  },
  frame:{
    padding:20,
  },
})