import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    let value = await AsyncStorage.getItem("user");
    if (value !== null) {
      console.log("login", value);
    }
  };

  _Login = () => {
    const { username, password } = this.state;
    axios({
      method: "post",
      url: "https://devel-7.tonjoostudio.com/recruitment-api/authenticate",
      data: {
        username,
        password
      }
    })
      .then(res => {
        AsyncStorage.setItem("user", JSON.stringify(res.config.data), () => {
          this.props.navigation.navigate("Home", {
            data: res.config.data,
            token: res.data.token
          });
        });
      })
      .catch(err => alert("username and password incorect " + err));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Image
          source={require("../../assets/Tonjoo1-logo-putih.png")}
          style={styles.logoImage}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#000"
            placeholder="username"
            selectionColor="#fff"
            onChangeText={username => this.setState({ username: username })}
            value={this.state.username}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#000"
            placeholder="password"
            selectionColor="#fff"
            onChangeText={password => this.setState({ password: password })}
            value={this.state.password}
            secureTextEntry
          />
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._Login()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F05638"
  },
  logoImage: {
    width: 300,
    height: 100
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: 'red',
  },
  inputBox: {
    width: "90%",
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

export default Login;
