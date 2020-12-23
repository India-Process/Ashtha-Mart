import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Block, Button, Input, Text } from "galio-framework";
import { materialTheme } from "../../constants";

//redux
import { connect } from "react-redux";
import { resetPassword, userValue } from "../../redux/actions/userAction";

class ChangePassword extends Component {
  state = {
    errorMessage: "",
  };

  onSubmit = () => {
    const { password } = this.props;
    if (!password) {
      this.setState({ errorMessage: "Please fill the password" });
      setTimeout(() => {
        this.setState({ errorMessage: "" });
      }, 2000);
    } else {
      this.props.resetPassword({ password });
    }
  };

  render() {
    const { navigation, password, message, error } = this.props;
    const { errorMessage } = this.state;
    return (
      <Block flex middle>
        <Text h5>Change Password</Text>
        {message ? (
          <Text color="green" size={20} center>
            {message}
          </Text>
        ) : null}
        {error ? (
          <Text center size={20} color="red">
            {password}
          </Text>
        ) : null}
        {errorMessage ? (
          <Text center color="red" size={20}>
            {errorMessage}
          </Text>
        ) : null}
        <Block safe middle style={styles.container}>
          <Input
            label="Password"
            placeholder="Password"
            color="black"
            placeholderTextColor="gray"
            value={password}
            onChangeText={(text) => this.props.userValue({ prop: "password", value: text })}
          />
          <Block row>
            <Button color={materialTheme.COLORS.ERROR} onPress={() => navigation.goBack()}>
              Cancel
            </Button>
            <Button color={materialTheme.COLORS.SUCCESS} onPress={this.onSubmit}>
              Update
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: materialTheme.SIZES.BASE,
  },
});

const mapStateToProps = (state) => ({
  password: state.user.password,
  message: state.user.message,
  error: state.user.error,
});

export default connect(mapStateToProps, { userValue, resetPassword })(ChangePassword);
