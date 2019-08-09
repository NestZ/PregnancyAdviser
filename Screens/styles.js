import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#d2f9fe'
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
    footIcon:{
      width: 170,
      height: 170,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    iconContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    counterText:{
      color: 'black',
      fontSize: 60
    },
    minusButton:{
      position: 'absolute',
      left: 20,
      bottom: 40,
      backgroundColor: '#f5424e',
      width: 90,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5
    },
    minusButtonText:{
      color: 'white',
      fontSize: 16
    },
    Alert_Main_View:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#00c853",
        height: 300 ,
        width: '90%',
        borderRadius: 25,
        elevation: 5
    },
    Info_Main_View:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#00c853",
        height: 400 ,
        width: '90%',
        borderRadius: 25,
        elevation: 5
    },
    Alert_Message:{
        fontSize: 19, 
        color: "#fff",
        textAlign: 'center',
        padding: 10
    },
    infoHeader:{
        fontSize: 27, 
        color: "#fff",
        textAlign: 'center',
        paddingTop: 10
    },
    buttonStyle:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40
    },
    infoButtonStyle:{
        width: '80%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40
    },
    TextStyle:{
         color:'#00c853',
         textAlign:'center',
         fontSize: 21,
         marginTop: -5
    },
    InfoIconContainer:{
       alignItems: 'flex-end',
       justifyContent: 'flex-end',
       paddingTop: 20,
       paddingRight: 20
    },
    hourContainer:{
        flex:1
    },
    hourHeader:{
        backgroundColor: '#f5424e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hourHeaderText:{
        color: 'white',
        fontSize: 18,
        padding: 15
    },
    scrollContainer:{
        flex: 1
    },
    resHeader:{
        fontSize: 16,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resText:{
        fontSize: 18,
        padding: 15
    },
    list:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    date:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    count:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    diaryContainer:{
        flex:1,
        backgroundColor: '#f9d5f9'
    },
    diaryHeader:{
        backgroundColor: '#f5424e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diaryHeaderText:{
        color: 'white',
        fontSize: 20,
        padding: 13
    },
    diaryScrollContainer:{
        flex: 1
    },
    nullList:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    nullListText:{
        color: '#8f8f8f',
        fontSize: 23,
        paddingTop: 200
    },
    diaryList:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    diaryDate:{
        fontSize: 15,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    diaryCount:{
        fontSize: 17,
        color: 'white'
    },
    arrow:{
        width: 25,
        height: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 19,
        bottom: 1,
        right: 10,
        tintColor: 'gray'
    },
    badge:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 25,
        backgroundColor: '#E91E63',
        borderRadius: 50,
        padding: 10,
        top: 19,
        bottom: 1,
        right: 60
    }
  });

  export default styles;