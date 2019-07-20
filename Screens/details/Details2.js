import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

class Details2 extends React.Component{
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
          <Text style={styles.headerText}> อาการลูกดิ้นที่ผิดปกติ </Text>
      </View>
        <ScrollView>
          <Text style={styles.Text}>1.ภาวะลูกดิ้นน้อยลง </Text>
          <Text style={styles.Text2}>      ภาวะลูกดิ้นน้อยลง หมายถึง ลูกอยู่ในภาวะอันตราย มีความเสี่ยงที่จะเสียชีวิตได้ ดังนั้นถ้าหากมารดาพบว่า ลูกดิ้นน้อยลง </Text>
          <Text style={styles.Text2}>หรือหยุดดิ้นไม่ว่าเป็นเวลาใดของแต่ละวันให้มาพบแพทย์ทันที  </Text>
          <Text> </Text>
          <Text style={styles.Text2}>      - ลูกดิ้นน้อยลงและดิ้นเบาๆ อาจเป็นเพราะในโพรงมดลูกคับแคบจนกระทั่งลูกเคลื่อนไหวได้ลำบากหรือเคลื่อนไหวไม่ได้ หรือ </Text>
          <Text style={styles.Text2}>ว่าเกิดความผิดปกติที่ทำอันตรายกับลูกจนลูกไม่มีแรงจะดิ้น อาจ </Text>
          <Text style={styles.Text2}>ทำให้ลูกในท้องเกิดภาวะขาดออกซิเจน 
            การเจริญเติบโตช้าใน </Text>
          <Text style={styles.Text2}>ครรภ์ การคลอดก่อนกำหนด ภาวะเครียดของลูกและลูกเสียชีวิตในครรภ์ ดังนั้นคุณแม่จึงควรบันทึกการดิ้นของลูกในแต่ละ </Text>
          <Text style={styles.Text2}>วันซึ่งจะช่วยให้พยาบาลแพทย์ หรือบุคลากรทาสุขภาพ สามารถประเมินสุขภาพของลูกในท้องเบื้องต้นได้อย่างถูกต้องรวดเร็ว</Text>
          <Text> </Text>
          <Text style={styles.Text}>2.ภาวะลูกดิ้นมากผิดปกติ </Text>
          <Text style={styles.Text2}>      ภาวะลูกดิ้นมากผิดปกติ หมายถึง ลูกเคลื่อนไหวมากกว่า 40 ครั้งต่อชั่วโมง ในปัจจุบันถือว่าไม่เป็นปัญหาแต่อย่างใด ยังไม่มี </Text>
          <Text style={styles.Text2}>การศึกษาที่ระบุว่ามีอันตรายใด ๆ ต่อลูกในท้อง </Text>
          <Text> </Text>
          <Text style={styles.Text2}>      - อาการลูกดิ้นมากที่แสดงถึงสัญญาณอันตรายก็คือ ลูกจะดิ้นแรงมากอยู่ระยะหนึ่ง แล้วหยุดดิ้นไปเลยและไม่มีอาการดิ้น </Text>
          <Text style={styles.Text2}>อีกต่อไป นั่นคือลูกในท้องเสียชีวิตแล้ว</Text>
        </ScrollView>
    </View>
  );
  }
}

export default Details2;

const styles = StyleSheet.create ({
  container:{
    flex: 1,
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
    fontSize: 20,
  },
  Text2:{
    fontSize: 16,
  },
})