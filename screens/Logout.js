import React, { Component } from "react";

import { Block, Button, Text } from "galio-framework";
import { connect } from "react-redux";
import  materialTheme  from "../constants/Theme";

import { logout } from "../redux/actions/authAction";

class Logout extends Component {
  render() {
      const {navigation}=this.props
    return (
      <Block
        flex
        middle
        style={{ backgroundColor: materialTheme.COLORS.WHITE }}
      >
        <Text>Are you sure want to logout</Text>
        <Block row>
          <Button
            color={materialTheme.COLORS.SUCCESS}
            onPress={() => this.props.logout()}
          >
            Logout
          </Button>
          <Button
            color={materialTheme.COLORS.ERROR}
            onPress={() => navigation.goBack()}
          >
            Dismiss
          </Button>
        </Block>
      </Block>
    );
  }
}

export default connect(null, { logout })(Logout);
