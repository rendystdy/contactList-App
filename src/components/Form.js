import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // handlerSubmit = () => {
  // //   this.props.onSubmit(username, password);
  // };
  
  render() {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#000"
            placeholder="username"
            selectionColor="#fff"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#000"
            placeholder="password"
            selectionColor="#fff"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry
          />
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.onChange(user)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  inputBox: {
    width: '90%',
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000",
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: "#000",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});

export default Form;
