import React, {Component} from 'react';
import {ImageBackground,ScrollView, StyleSheet, Text, View} from 'react-native';

class Details3 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
      <ScrollView>
      <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../img/a.png')}
            >
        <View style={styles.header}> 
          <Text style={styles.headerText}> รูปแบบการดิ้นของลูกในครรภ์ตามอายุครรภ์ </Text>
        </View>
        <Text style={styles.Text}>-  คุณแม่ตั้งครรภ์แรกจะรู้สึกถึงการเคลื่อนไหวของลูกในท้องเมื่ออายุครรภ์ประมาณ 18-20 สัปดาห์ {'\n'} </Text>
        <Text style={styles.Text}>-  คุณแม่ตั้งครรภ์หลังจะรู้สึกถึงการเคลื่อนไหวของลูกในท้องเมื่ออายุครรภ์ประมาณ 16-18 สัปดาห์ {'\n'} </Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 1-8 </Text> คุณแม่จะรู้สึกว่าลูกจะดิ้นรวดเร็วมาก เป็นจังหวะสั้นๆลักษณะกระตุก {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 8-12 </Text> ลูกจะดิ้นช้าลงมีการผสมผสานรูปแบบมากขึ้น {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 12-16 </Text> ลูกจะดิ้นอย่างมีแบบแผนพร้อมเพรียง โดยมีการเหยียดขาสุด พร้อมกับเหยียดแขนบางส่วน </Text>
        <Text style={styles.Text}>พบว่าลูกมีการกำมือ และคลายมือได้แล้ว {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 16-20 </Text> คุณแม่จะรู้สึกว่าลูกดิ้นรุนแรงขึ้น มีการดิ้นคล้ายกับการขี่จักรยานคือ เหยียดขาข้างหนึ่งใน </Text>
        <Text style={styles.Text}>ลักษณะที่งอขาอีกข้างหนึ่งในเวลาเดียวกันได้ {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 20-23 </Text> คุณแม่จะเริ่มรู้สึกได้ถึงการเตะเบา ๆ จากนั้นในสัปดาห์ต่อ ๆ มา กิจกรรมทางกายของลูกก็จะ </Text>
        <Text style={styles.Text}>เพิ่มขึ้นและชัดเจนขึ้น เช่น เตะ หมุนตัว หรือตีลังกามาก </Text>
        <Text style={styles.Text}>ขึ้นในช่วงเย็นของวัน หรือเวลารับประทานอาหาร {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 24-28 </Text> คุณแม่รู้สึกว่าลูกมีการเคลื่อนไหวอยู่บ่อย ๆ โดยอาจมีทั้งการขยับเพียงแขนขาหรือการ </Text>
        <Text style={styles.Text}>เคลื่อนไหวทั้งร่างกาย {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 29-31 </Text> การขยับตัวของลูกจะเบาลง แต่ชัดเจนมากขึ้น เช่น เตะแรงขึ้น ต่อยแรงขึ้น และหลัง </Text>
        <Text style={styles.Text}>จากนั้นคุณแม่อาจรู้สึกคล้ายกับว่าลูกขยับตัวเพื่อต่อสู้ </Text>
        <Text style={styles.Text}>กับพื้นที่ในครรภ์ที่น้อยลง {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 32-35 </Text> ในช่วงสัปดาห์ที่ 32 ความถี่ของการดิ้นจะสูงที่สุด หลังจากนั้นจะเริ่มคงที่ {'\n'}</Text>
        <Text style={styles.Text}><Text style={styles.Bold}>สัปดาห์ที่ 36-40 </Text> หากเป็นท้องแรก ในช่วงสัปดาห์ที่ 36 ลูกจะเริ่มพลิกตัวเพื่อให้อยู่ในลักษณะเอาศีรษะลง แต่ถ้าหากลูกไม่กลับตัว กล้ามเนื้อภายในครรภ์และท้องจะช่วยในการพลิกตัวของลูก หากลูกอยู่ในลักษณะเอาศีรษะลง คุณแม่จะรู้สึกเหมือนมีแตงโมกดทับอยู่ที่กล้ามเนื้ออุ้งเชิงกราน หากลูกยังคงไม่พลิกตัว อาจต้องปรึกษาแพทย์เพื่อให้การคลอดปลอดภัยกับลูกที่สุด
   	    แต่หากเป็นการตั้งครรภ์ครั้งที่ 2 กล้ามเนื้อบริเวณท้องจะแข็ง แรงน้อยกว่าการตั้งครรภ์ครั้งแรก ดังนั้นลูกอาจจะค่อย ๆ พลิกตัวอย่างช้า ๆ อย่างไรก็ตามในช่วงสัปดาห์ท้าย ๆ ลูกจะยังขยับตัวอยู่ การเคลื่อนไหวจะน้อยลงแต่ยังคงรู้สึกได้อย่างชัดเจน ซึ่งอาจทำให้คุณแม่รู้สึกไม่ค่อยสบายตัวหรือรู้สึกเจ็บ {'\n\n\n'}</Text>
         </ImageBackground>
      </ScrollView>
     
  );
  }
}

export default Details3;

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
    justifyContent: 'center',
    fontSize: 20,
    padding: 15,
  },
  Text:{
    fontSize: 18,
  },
  Bold:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})
