import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export class ContactList extends Component {
   render() {
      return (
         <View style={styles.body}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.imgProfile}
              source={{ uri: this.props.imgUrl}}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Icon name="ios-contact" size={25} color="#F05638" />
              <Text style={styles.textName}>{this.props.firstName} - {this.props.lastName}</Text>
            </View>
            <View style={styles.textContainer}>
              <Icon name="ios-man" size={25} color="#F05638" />
              <Text style={styles.textGender}>{this.props.gender}</Text>
            </View>
            <View style={styles.textContainer}>
              <Icon name="ios-mail" size={25} color="#F05638" />
              <Text style={styles.textEmail}>{this.props.email}</Text>
            </View>
          </View>
        </View>
      )
   }
}

const styles = StyleSheet.create({
   body: {
      marginVertical: 10,
      borderWidth: 1,
      // border
      width: "90%",
      height: 150,
      backgroundColor: "#fff",
      // opacity: 0.5,
      flexDirection: "row"
    },
    imgContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 15
      //  backgroundColor: "red"
    },
    imgProfile: {
      width: 100,
      height: 100
      // backgroundColor: 'red'
    },
    contentContainer: {
      flex: 3
      //  backgroundColor: "blue"
    },
    textContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginHorizontal: 10,
      marginVertical: 10
    },
    textName: {
      fontSize: 17,
      fontWeight: "700",
      color: "#000",
      paddingHorizontal: 5,
      marginLeft: 10
      // textAlign: 'center'
    },
    textGender: {
      fontSize: 17,
      fontWeight: "700",
      color: "#000",
      paddingHorizontal: 5,
      marginLeft: 20
    },
    textEmail: {
      fontSize: 15,
      paddingHorizontal: 5,
      color: "#000",
      fontWeight: '700'
    },
})

export default ContactList
