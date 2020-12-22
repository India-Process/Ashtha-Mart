import React from "react";
import { Dimensions, StyleSheet, KeyboardAvoidingView } from "react-native";
// galio component
import { Block, Button, Input, Text } from "galio-framework";
import { materialTheme } from "../constants";
import RadioButton from "../components/Radio";
import { connect } from "react-redux";

import { userValue, registerUser } from "../redux/actions/authAction";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const PROP = [
  {
    key: 1,
    text: "User",
    value: 0,
  },
  {
    key: 2,
    text: "Member",
    value: 1,
  },
];

class Signup extends React.Component {
  onSubmit() {
    const { username, name, email, password, usertype } = this.props;
    this.props.registerUser({ username, name, email, password, usertype });
  }

  render() {
    const { message, error } = this.props;

    return (
      <ScrollView>
        <Block safe flex={1} middle style={styles.container}>
          <KeyboardAvoidingView behavior="height" enabled>
            <Block middle>
              <Text h5>Register Now !</Text>
            </Block>
            {error ? (
              <Text center size={20} color="red">
                {error}
              </Text>
            ) : null}
            {message ? (
              <Text center size={20} color="green">
                {message}
              </Text>
            ) : null}
            <RadioButton PROP={PROP} />
            <Input
              label="Mobile"
              placeholder="Mobile"
              placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
              color="black"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              value={this.props.username}
              onChangeText={(text) => this.props.userValue({ prop: "username", value: text })}
            />
            <Input
              label="Name"
              placeholder="Name"
              placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
              color="black"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              value={this.props.name}
              onChangeText={(text) => this.props.userValue({ prop: "name", value: text })}
            />
            <Input
              label="Email"
              type="email-address"
              placeholder="Email"
              placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
              color="black"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              value={this.props.email}
              onChangeText={(text) => this.props.userValue({ prop: "email", value: text })}
            />
            <Input
              label="Password"
              password
              viewPass
              placeholder="Password"
              placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
              color="black"
              style={{ width: width * 0.9 }}
              value={this.props.password}
              onChangeText={(text) => this.props.userValue({ prop: "password", value: text })}
            />
            <Button size="large" color={materialTheme.COLORS.BUTTON_COLOR} onPress={this.onSubmit.bind(this)}>
              Create Your Account
            </Button>
          </KeyboardAvoidingView>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.WHITE,
    height: height,
  },
});

const mapStateToProps = ({ auth }) => {
  const { username, name, email, password, usertype, message, error, authloading } = auth;
  return {
    username,
    name,
    email,
    password,
    usertype,
    message,
    error,
    authloading,
  };
};

export default connect(mapStateToProps, { userValue, registerUser })(Signup);
