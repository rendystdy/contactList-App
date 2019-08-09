import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const AppStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Login"
  }
);
