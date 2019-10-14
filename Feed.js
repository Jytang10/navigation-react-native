//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35, marginBottom: 20}}>Feed</Text>
        <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Profile')}></Button>
        <Text>User Name: {this.props.navigation.state.params.userName}</Text>
        <Text>Subscribers: {this.props.navigation.state.params.Subscriber}</Text>
        <Text>Age: {this.props.navigation.state.params.Age}</Text>
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
    backgroundColor: '#e74c3c',
  },
});

//make this component available to the app
export default Feed;
