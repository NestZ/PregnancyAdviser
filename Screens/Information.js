import React, { Component } from 'react';
import { StyleSheet, View, Button, Image,Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show1:false,
      show2:false,
      show3:false,
      show4:false,
    };
  }
 static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
 
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  ShowHideComponent1 = () => {
    if (this.state.show1 == true) {
      this.setState({ show1: false });
    } else {
      this.setState({ show1: true });
    }
  };
  ShowHideComponent2 = () => {
    if (this.state.show2 == true) {
      this.setState({ show2: false });
    } else {
      this.setState({ show2: true });
    }
  }; 
   ShowHideComponent3 = () => {
    if (this.state.show3 == true) {
      this.setState({ show3: false });
    } else {
      this.setState({ show3: true });
    }
  };
  ShowHideComponent4 = () => {
    if (this.state.show4 == true) {
      this.setState({ show4: false });
    } else {
      this.setState({ show4: true });
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
     <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Information</Text>
        </View>
       <ScrollView style={styles.kyu}>
       <TouchableOpacity onPress={this.ShowHideComponent}><Text style={styles.list}>นับลูกดิ้น</Text></TouchableOpacity>
        {this.state.show ? (
        <View>
        <View style={styles.borderstayle}>
        <Text style={styles.Text2}>   ถือเป็นวิธีการประเมินสุขภาพลูกในท้อง ที่คุณแม่ </Text>
        <Text style={styles.Text2}>สามารถประเมินสุขภาพลูกน้อยในท้องและปฏิบัติได้ </Text>
        <Text style={styles.Text2}>ด้วยตนเอง  และช่วยเฝ้าระวังเกี่ยวกับภาวะอันตรายลูก </Text>
        <Text style={styles.Text2}>ในท้องซึ่งจะมีการเปลี่ยนแปลงพฤติกรรม การดิ้นที่คุณ </Text>
        <Text style={styles.Text2}>แม่สามารถสังเกตได้ ดังนั้นเมื่อคุณแม่อายุครรภ์เข้าสู่ </Text>
        <Text style={styles.Text2}>32 สัปดาห์ขึ้นไป ควรนับลูกดิ้นทุกวันโดยเฉพาะในคุณ </Text>
        <Text style={styles.Text2}>แม่ที่ได้รับการวินิจฉัยว่าตั้งครรภ์เสี่ยงสูง </Text>
        </View>
        <View>
        <TouchableOpacity onPress={this.ShowHideComponent}><Text style={styles.list1}>ปิด</Text></TouchableOpacity>
        </View>
        </View>
        ) : null}
        <TouchableOpacity onPress={this.ShowHideComponent1}><Text style={styles.list}>อาการลูกดิ้นผิดปกติ</Text></TouchableOpacity>
        {this.state.show1 ? (
          <View >
            <View style={styles.borderstayle}>
         <Text style={styles.Text}>1.ภาวะลูกดิ้นน้อยลง </Text>
          <Text style={styles.Text2}>   ภาวะลูกดิ้นน้อยลง หมายถึง ลูกอยู่ในภาวะอันตราย </Text>
          <Text style={styles.Text2}>มีความเสี่ยงที่จะเสียชีวิตได้ ดังนั้นถ้าหากมารดาพบว่า </Text>
          <Text style={styles.Text2}>ลูกดิ้นน้อยลงหรือหยุดดิ้นไม่ว่าเป็นเวลาใดของแต่ละ </Text>
          <Text style={styles.Text2}>วันให้มาพบแพทย์ทันที  </Text>
          <Text> </Text>
          <Text style={styles.Text2}>   - ลูกดิ้นน้อยลงและดิ้นเบาๆ อาจเป็นเพราะในโพรง </Text>
          <Text style={styles.Text2}>มดลูกคับแคบจนกระทั่งลูกเคลื่อนไหวได้ลำบากหรือ </Text>
          <Text style={styles.Text2}>เคลื่อนไหวไม่ได้ หรือ ว่าเกิดความผิดปกติที่ทำ </Text>
          <Text style={styles.Text2}>อันตรายกับลูกจนลูกไม่มีแรงจะดิ้นอาจทำให้ลูกในท้อง </Text>
          <Text style={styles.Text2}>เกิดภาวะขาดออกซิเจนการเจริญเติบโตช้าในครรภ์ </Text>
          <Text style={styles.Text2}>การคลอดก่อนกำหนด ภาวะเครียดของลูกและลูกเสีย </Text>
          <Text style={styles.Text2}>ชีวิตในครรภ์ ดังนั้นคุณแม่จึงควรบันทึกการดิ้นของลูก </Text>
          <Text style={styles.Text2}>ในแต่ละวันซึ่งจะช่วยให้พยาบาลแพทย์ หรือบุคลากร </Text>
          <Text style={styles.Text2}>ทางสุขภาพ สามารถประเมินสุขภาพของลูกในท้อง </Text>
          <Text style={styles.Text2}>เบื้องต้นได้อย่างถูกต้องรวดเร็ว</Text>
          <Text> </Text>
          <Text style={styles.Text}>2.ภาวะลูกดิ้นมากผิดปกติ </Text>
          <Text style={styles.Text2}>   ภาวะลูกดิ้นมากผิดปกติ หมายถึง ลูกเคลื่อนไหว </Text>
          <Text style={styles.Text2}>มากกว่า 40 ครั้งต่อชั่วโมง ในปัจจุบันถือว่าไม่เป็น </Text>
          <Text style={styles.Text2}>ปัญหาแต่อย่างใด ยังไม่มีการศึกษาที่ระบุว่ามี </Text>
          <Text style={styles.Text2}>อันตรายใด ๆ ต่อลูกในท้อง </Text>
          <Text> </Text>
          <Text style={styles.Text2}>   - อาการลูกดิ้นมากที่แสดงถึงสัญญาณอันตรายก็คือ </Text>
          <Text style={styles.Text2}>ลูกจะดิ้นแรงมากอยู่ระยะหนึ่ง แล้วหยุดดิ้นไปเลยและ </Text>
          <Text style={styles.Text2}>ไม่มีอาการดิ้น อีกต่อไป นั่นคือลูกในท้องเสียชีวิตแล้ว</Text>
            </View>
            <View>
            <TouchableOpacity onPress={this.ShowHideComponent1}><Text style={styles.list1}>ปิด</Text></TouchableOpacity>
            </View>
            </View>
        ) : null}
       <TouchableOpacity onPress={this.ShowHideComponent2}><Text style={styles.list}>รูปแบบการดิ้นของลูกในครรภ์ตามอายุครรภ์</Text></TouchableOpacity>
        {this.state.show2 ? (
        <View>
        <View style={styles.borderstayle}>
        <Text style={styles.Text2}>-  คุณแม่ตั้งครรภ์แรกจะรู้สึกถึงการเคลื่อนไหวของลูกในท้องเมื่ออายุครรภ์ประมาณ 18-20 สัปดาห์ {'\n'} </Text>
        <Text style={styles.Text2}>-  คุณแม่ตั้งครรภ์หลังจะรู้สึกถึงการเคลื่อนไหวของลูกในท้องเมื่ออายุครรภ์ประมาณ 16-18 สัปดาห์ {'\n'} </Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 1-8 </Text> คุณแม่จะรู้สึกว่าลูกจะดิ้นรวดเร็วมาก เป็นจังหวะสั้นๆลักษณะกระตุก {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 8-12 </Text> ลูกจะดิ้นช้าลงมีการผสมผสานรูปแบบมากขึ้น {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 12-16 </Text> ลูกจะดิ้นอย่างมีแบบแผนพร้อมเพรียง โดยมีการเหยียดขาสุด พร้อมกับเหยียดแขน </Text>
        <Text style={styles.Text2}>บางส่วนพบว่าลูกมีการกำมือ และคลายมือได้แล้ว {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 16-20 </Text> คุณแม่จะรู้สึกว่าลูกดิ้นรุนแรงขึ้น มีการดิ้นคล้ายกับการขี่จักรยานคือ เหยียดขาข้างหนึ่ง </Text>
        <Text style={styles.Text2}>ในลักษณะที่งอขาอีกข้างหนึ่งในเวลาเดียวกันได้ {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 20-23 </Text> คุณแม่จะเริ่มรู้สึกได้ถึงการเตะเบา ๆ จากนั้นในสัปดาห์ต่อ ๆ มา กิจกรรมทางกายของลูกก็ </Text>
        <Text style={styles.Text2}>จะเพิ่มขึ้นและชัดเจนขึ้น เช่น เตะ หมุนตัว หรือตีลังกา </Text>
        <Text style={styles.Text2}>มากขึ้นในช่วงเย็นของวัน หรือเวลารับประทานอาหาร {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 24-28 </Text> คุณแม่รู้สึกว่าลูกมีการเคลื่อนไหวอยู่บ่อย ๆ โดยอาจมีทั้งการขยับเพียงแขนขาหรือการ </Text>
        <Text style={styles.Text2}>เคลื่อนไหวทั้งร่างกาย {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 29-31 </Text> การขยับตัวของลูxxกจะเบาลง แต่ชัดเจนมากขึ้น เช่น เตะแรงขึ้น ต่อยแรงขึ้น และหลัง </Text>
        <Text style={styles.Text2}>จากนั้นคุณแม่อาจรู้สึกคล้ายกับว่าลูกขยับตัวเพื่อต่อสู้ </Text>
        <Text style={styles.Text2}>กับพื้นที่ในครรภ์ที่น้อยลง {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 32-35 </Text> ในช่วงสัปดาห์ที่ 32 ความถี่ของการดิ้นจะสูงที่สุด หลังจากนั้นจะเริ่มคงที่ {'\n'}</Text>
        <Text style={styles.Text2}><Text style={styles.Bold}>สัปดาห์ที่ 36-40 </Text> หากเป็นท้องแรก ในช่วงสัปดาห์ที่ 36 ลูกจะเริ่มพลิกตัวเพื่อให้อยู่ในลักษณะเอาศีรษะลง แต่ถ้าหากลูกไม่กลับตัว กล้ามเนื้อภายในครรภ์และท้องจะช่วยในการพลิกตัวของลูก หากลูกอยู่ในลักษณะเอาศีรษะลง คุณแม่จะรู้สึกเหมือนมีแตงโมกดทับอยู่ที่กล้ามเนื้ออุ้งเชิงกราน หากลูกยังคงไม่พลิกตัว อาจต้องปรึกษาแพทย์เพื่อให้การคลอดปลอดภัยกับลูกที่สุด
   	    แต่หากเป็นการตั้งครรภ์ครั้งที่ 2 กล้ามเนื้อบริเวณท้องจะแข็ง แรงน้อยกว่าการตั้งครรภ์ครั้งแรก ดังนั้นลูกอาจจะค่อย ๆ พลิกตัวอย่างช้า ๆ อย่างไรก็ตามในช่วงสัปดาห์ท้าย ๆ ลูกจะยังขยับตัวอยู่ การเคลื่อนไหวจะน้อยลงแต่ยังคงรู้สึกได้อย่างชัดเจน ซึ่งอาจทำให้คุณแม่รู้สึกไม่ค่อยสบายตัวหรือรู้สึกเจ็บ {'\n\n\n'}</Text>
        </View>
        <View>
        <TouchableOpacity onPress={this.ShowHideComponent2}><Text style={styles.list1}>ปิด</Text></TouchableOpacity>
        </View>
        </View>
        ) : null}
       <TouchableOpacity onPress={this.ShowHideComponent3}><Text style={styles.list}>วิธีการนับลูกดิ้น</Text></TouchableOpacity>
        {this.state.show3 ? (
        <View>
        <View style={styles.borderstayle}>
        <Text style={styles.Text2}>   การนับลูกดิ้นจนครบ 10 ครั้ง (Count-to-ten) คือ การนับจำนวนลูกดิ้นอย่างต่อเนื่องไปจนครบ 10 ครั้ง </Text>
        <Text style={styles.Text2}>ใน 12 ชั่วโมง ซึ่งปกติลูกจะดิ้นครบ 10 ครั้งในเวลา </Text>
        <Text style={styles.Text2}>20-30 นาที ถ้าไม่ครบให้นับต่อไปจนครบ 12 ชั่วโมง </Text>
        <Text style={styles.Text2}>หากลูกยังดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง ถือว่าผิด </Text>
        <Text style={styles.Text2}>ปกติ ควรรีบมาโรงพยาบาลทันที </Text>
        </View>
        <View>
        <TouchableOpacity onPress={this.ShowHideComponent3}><Text style={styles.list1}>ปิด</Text></TouchableOpacity>
        </View>
        </View>
        ) : null}
         <TouchableOpacity onPress={this.ShowHideComponent4}><Text style={styles.list}>การแปรผลลูกดิ้น</Text></TouchableOpacity>
        {this.state.show4 ? (
        <View>
        <View style={styles.borderstayle}>
        <Text style={styles.Text2}>   ถ้าลูกในท้องดิ้นครบ 10 ครั้ง ใน 30 นาที แสดงว่า ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ มีพัฒนาการการ </Text>
        <Text style={styles.Text2}>เจริญเติบโตที่ดี (แปลผล) แต่ถ้าลูกในท้องดิ้นน้อยกว่า 10 ครั้ง ใน 30 นาที ให้นับต่อไปอีกจนครบ 12 ชั่วโมง </Text>
	      <Text style={styles.Text2}>หากลูกยังดิ้นน้อยกว่า 10 ครั้ง ใน 12 ชั่วโมง แสดงว่า</Text>
        <Text style={styles.Text2}>ลูกในท้องมีความผิดปกติควรรีบมาพบแพทย์ (แปลผล) </Text>
        </View>
        <View>
        <TouchableOpacity onPress={this.ShowHideComponent4}><Text style={styles.list1}>ปิด</Text></TouchableOpacity>
        </View>
        </View>
        ) : null}
       <TouchableOpacity onPress={()=>navigate('Musiclist')}><Text style ={styles.list}>เพลงเสริมพัฒนาการ</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('Callphone')}><Text style ={styles.list}>เบอร์โทรติดต่อยามฉุกเฉิน</Text></TouchableOpacity>
        </ScrollView>
        </View>
    );
}
}
const styles = StyleSheet.create ({
  container:{
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
  Text:{
    fontSize: 18,
  },
  Text2:{
    fontSize: 16,
  },
  borderstayle:{
    backgroundColor: 'white',
    marginRight :30,
    marginLeft :30,
  },
  list:{
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    backgroundColor:"#40a0ff",
    fontSize:18,
    color:"white",
    textAlign :'center',
    borderRadius:40,
    width:'95%',
    justifyContent:'center',
    alignSelf:'center',
},
list1:{
  padding: 5,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#40a0ff",
  fontSize:15 ,
  color:"white",
  textAlign :'center',
  borderRadius:40,
  width:'95%',
  justifyContent:'center',
  alignSelf:'center',
},
Bold:{
  fontWeight: 'bold',
},
kyu:{
  paddingTop:40,
}
});
