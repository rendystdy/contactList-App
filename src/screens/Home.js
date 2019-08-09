import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput
} from "react-native";
import Axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";

import ContactList from "../components/ContactList";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
      modalVisible: false,
      gender: "male"
    };
  }

  static navigationOptions = {
    title: "Contact List",
    headerStyle: {
      backgroundColor: "#F05638"
    },
    headerRight: (
      <Icon name="ios-add-circle" size={30} onPress={() => alert("Add")} />
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => alert("Logout")}>
        <Text>Logout</Text>
      </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
      padding: 10
    },
    headerRightContainerStyle: {
      padding: 10
    }
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const token = this.props.navigation.state.params.token;
    Axios.get(
      `https://devel-7.tonjoostudio.com/recruitment-api/contacts?token=${token}`
    )
      .then(res =>
        this.setState({
          dataUser: res.data.data,
          page: 0
        })
      )
      .catch(err => console.log(err));
  };

  setModalVisibleClose = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  setModalVisibleOpen = () => {
    this.setState({
      modalVisible: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 22, backgroundColor: "red" }}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.containerModal}>
              <View>
                <View style={styles.firstNameContainer}>
                  <Text style={styles.title}>First Name</Text>
                  <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="#000"
                    placeholderTextColor="#fff"
                    placeholder="fisrt name"
                    selectionColor="#fff"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.firstNameContainer}>
                  <Text style={styles.title}>Last Name</Text>
                  <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="#000"
                    placeholderTextColor="#fff"
                    placeholder="Last name"
                    selectionColor="#fff"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.firstNameContainer}>
                  <Text style={styles.title}>Email</Text>
                  <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="#000"
                    placeholderTextColor="#fff"
                    placeholder="email"
                    selectionColor="#fff"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.firstNameContainer}>
                  <Text style={styles.title}>Gender</Text>
                  <CheckBox title="MAlE" checked={this.state.male} />
                  <CheckBox title="FEMALE" checked={this.state.male} />
                </View>
                <View style={styles.firstNameContainer}>
                  <Text style={styles.title}>Image</Text>
                  <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="#000"
                    placeholderTextColor="#fff"
                    placeholder="image url"
                    selectionColor="#fff"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.hideModal} onPress={() => this.setModalVisibleClose()}>
                <Text style={styles.textHideModal}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          style={styles.add}
          onPress={() => this.setModalVisibleOpen()}
        >
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.dataUser}
          keyExtractor={(user, index) => index.toString()}
          renderItem={user => {
            return (
              <ContactList
                imgUrl={user.item.avatar}
                firstName={user.item.first_name}
                lastName={user.item.last_name}
                gender={user.item.gender}
                email={user.item.email}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  logout: {
    fontSize: 17,
    fontWeight: "700"
  },
  add: {
    backgroundColor: "#fff",
    width: 50,
    height: 20
  },
  addText: {
    textAlign: "center",
    fontWeight: "500"
  },
  containerModal: {
    marginTop: 22,
    flex: 1,
    padding: 10
  },
  inputBox: {
    width: "90%",
    backgroundColor: "#000",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fff",
    marginVertical: 10
  },
  firstNameContainer: {
  },
  title: {
    fontSize: 17,
    fontWeight: "700"
  },
  hideModal: {
    padding: 5,
    backgroundColor: '#000'
  },
  textHideModal: {
    color: '#fff'
  }
});

export default Home;
