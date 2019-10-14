//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35, marginBottom: 20}}>Home</Text>
        <Button title="Go to Feed"></Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
});

//make this component available to the app
export default Home;
