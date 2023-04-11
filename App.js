import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>RuivoSays!</Text>
        <StatusBar style="auto" />
      </View>
    );
  } 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
