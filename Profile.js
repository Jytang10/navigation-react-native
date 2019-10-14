//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

// create a component
class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35, marginBottom: 20}}>Profile</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}></Button>
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
    backgroundColor: '#3498db',
  },
});

//make this component available to the app
export default Profile;
