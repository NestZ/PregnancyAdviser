import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

class H_Diary_S extends React.Component{
  render(){
    return (
        <View key={this.props.keyval} style={styles.diaryList}>
            <Text style={styles.diaryDate}>{this.props.val.date}</Text>
            <View style={styles.badge}>
                <Text style={styles.diaryCount}>{this.props.val.currCount}</Text>
            </View>
            <Image style={styles.arrow} source={require('./img/rightArrow.png')} />
        </View>
    );
  }
}

export default H_Diary_S;