import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Block, Text, Icon, Input, Button } from "galio-framework";
import { materialTheme } from "../../constants";

class User extends Component {
  render() {
    return (
      <Block flex safe middle>
        <Text h5>My Profile</Text>
        <Block>
          <Input label="First Name" placeholder="Name" />
          <Input label="Last Name" placeholder="Name" />
          <Input label="Phone" placeholder="Name" />
          <Input label="Email Address" placeholder="Email" />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default User;
