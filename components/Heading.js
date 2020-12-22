import React from "react";

import { withNavigation } from "@react-navigation/compat";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Block, Text, theme } from "galio-framework";
import { materialTheme } from "../constants";

const { width } = Dimensions.get("screen");

class Heading extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Block row style={styles.head}>
        <Block row middle>
          <TouchableWithoutFeedback>
            <Text style={styles.heading}>{title}</Text>
          </TouchableWithoutFeedback>
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Heading);

const styles = StyleSheet.create({
  head: {
    paddingTop: 15,
    color: "green",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    textAlign: "center",
    fontWeight: "100",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: materialTheme.COLORS.BUTTON_COLOR,
  },
});
