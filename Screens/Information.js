import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
 
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
     <View style={{backgroundColor:'#ffead5',height:"100%"}}>
               <View style={styles.header}>
          <Text style={styles.headerText}>Information</Text>
        </View> 
      <ScrollView>
      <View style={styles.kyu}>
       <TouchableOpacity onPress={()=>navigate('Details1')}>
        <Text style={styles.list}>การนับลูกดิ้น</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigate('Details3')}>
        <Text style={styles.list1}>รูปแบบการดิ้นของลูกในครรภ์ตามอายุครรภ์</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigate('Details4')}>
        <Text style={styles.list2}>วิธีการนับลูกดิ้น</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigate('Details2')}>
        <Text style={styles.list3}>อาการลูกดิ้นผิดปกติ</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigate('Details5')}>
        <Text style={styles.list4}>การแปลผลลูกดิ้น</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigate('Musiclist')}><Text style ={styles.list5}>เพลงเสริมพัฒนาการ</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('Callphone')}><Text style ={styles.list6}>เบอร์โทรศัพท์ติดต่อฉุกเฉิน</Text></TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
}
}
const styles = StyleSheet.create ({
  container:{
    flex: 1,
  },
  Text:{
    fontSize: responsiveFontSize(2.9),
    fontFamily: "SB - Modern"
  },
  Text2:{
    fontSize: responsiveFontSize(2.85),
    fontFamily: "SB - Modern"
  },
  borderstayle:{
    marginRight :30,
    marginLeft :30,
  },
  borderstayle0:{
    backgroundColor: '#ffe7bd',
  },
  list:{
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    backgroundColor:"#ff5a3d",
    fontSize: responsiveFontSize(2.9),
    fontFamily: "SB - Modern",
    color:"#424241",
    textAlign :'center',
},
list1:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#ff9987",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
  width:'100%',
},
list2:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#fcf586",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
},
list3:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#b7fc86",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
},
list4:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#86fcf0",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
},
list5:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#cd56f5",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
},
list6:{
  padding: 15,
  borderBottomWidth: 2,
  borderBottomColor: '#ededed',
  backgroundColor:"#ebb0ff",
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
  color:"#424241",
  textAlign :'center',
},

Bold:{
  fontSize: responsiveFontSize(2.9),
  fontFamily: "SB - Modern",
},
kyu:{
  paddingTop:40,
},
header:{
  backgroundColor: '#f5424e',
  alignItems: 'center',
  justifyContent: 'center',
},
headerText:{
  color: 'white',
  fontSize: 20,
  padding: 13
},
});