import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

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
        <Text style={styles.Text}>            ถือเป็นวิธีการประเมินสุขภาพลูกในท้อง ที่คุณแม่สามารถประเมินสุขภาพลูกน้อยในท้องและปฏิบัติได้</Text>
        <Text style={styles.Text}>ด้วยตนเอง  และช่วยเฝ้าระวังเกี่ยวกับภาวะอันตราย ลูกในท้องซึ่งจะมีการเปลี่ยนแปลงพฤติกรรมการดิ้น </Text>
        <Text style={styles.Text}>ที่คุณแม่สามารถสังเกตได้ ดังนั้นเมื่อคุณแม่อายุครรภ์เข้าสู่ 28-32สัปดาห์ขึ้นไปควรนับลูกดิ้นทุกวัน โดยเฉพาะ</Text>
        <Text style={styles.Text}>ในคุณแม่ที่ได้รับการวินิจฉัยว่าตั้งครรภ์เสี่ยงสูง </Text>
        <View style={styles.resize}>
              <Image
                 style={{width: 200, height: 200,}}
                 source={require('./img/babyshark.png')}> 
             </Image>
            </View>
      </View>
    </View>
  );
  }
}

export default Details1;

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: "#d6f2ff",
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
  frame:{
    padding:20,
  },
  resize:{
    alignItems:"center",
    paddingTop:40
  }
})