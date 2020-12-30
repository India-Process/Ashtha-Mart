import React, { Component } from "react";
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";

// galio component
import { Block, Button, Input, Text, theme } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import { materialTheme } from "../constants";

//redux stuff
import { connect } from "react-redux";
import { userValue, loginUser } from "../redux/actions/authAction";
import { TouchableOpacity } from "react-native-gesture-handler";

class Signin extends Component {
  state = {
    errorMessage: "",
  };

  onButtonPress() {
    const { mobile, password } = this.props;
    if (!mobile || !password) {
      this.setState({ errorMessage: "Please fill the credentials" });
    } else {
      this.props.loginUser({ mobile, password });
    }
  }

  render() {
    const { navigation, loginerror, loginmessage, authloading } = this.props;
    const {errorMessage}=this.state;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block
            style={{
              marginTop: theme.SIZES.BASE,
              marginBottom: height * 0.1,
            }}
          >
            <Text color={materialTheme.COLORS.ERROR} h5>
              Welcome to Aashtha 24/7 Mart
            </Text>
            <Text size={18}>Login to your account</Text>
            <Text></Text>
          </Block>
          {loginerror ? (
            <Text size={20} color="red">
              {loginerror}
            </Text>
          ) : null}
          {errorMessage ? (
            <Text size={20} color="red">
              {errorMessage}
            </Text>
          ) : null}
          {loginmessage ? (
            <Text size={20} color="green">
              {loginmessage}
            </Text>
          ) : null}

          <Block flex center space="evenly">
            <Block flex>
              <Input
                label="Mobile number"
                type="number-pad"
                placeholder="Mobile"
                placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
                color="black"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                value={this.props.mobile}
                onChangeText={(text) => this.props.userValue({ prop: "mobile", value: text })}
              />
              <Input
                label="Password"
                password
                viewPass
                color="black"
                placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor={materialTheme.COLORS.BORDER_COLOR}
                style={{ width: width * 0.9 }}
                value={this.props.password}
                onChangeText={(number) => this.props.userValue({ prop: "password", value: number })}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                style={{
                  alignSelf: "flex-end",
                  lineHeight: theme.SIZES.FONT * 2,
                }}
              >
                Forgot your password?
              </Text>

              <Button size="large" color={materialTheme.COLORS.BUTTON_COLOR} onPress={this.onButtonPress.bind(this)}>
                Sign in
              </Button>
              <Block flex middle style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text center color={theme.COLORS.ERROR} size={15}>
                    {"Don't have an account? Sign Up"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MainFlow")}>
                  <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 1.5}>
                    {"Continue Shopping"}
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  button: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
});

const mapStateToProps = ({ auth }) => {
  const { mobile, password, loginerror, authloading, loginmessage } = auth;
  return {
    mobile,
    password,
    loginerror,
    authloading,
    loginmessage,
  };
};

export default connect(mapStateToProps, {
  userValue,
  loginUser,
})(Signin);
