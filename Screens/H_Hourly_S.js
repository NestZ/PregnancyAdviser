import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

class H_Hourly_S extends React.Component{
  render(){
    return (
        <View key={this.props.keyval} style={styles.list}>
            <Text style={styles.date}>{this.props.val}</Text>
        </View>
    );
  }
}

export default H_Hourly_S;