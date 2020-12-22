import React from "react";
import { Image, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Block, Text } from "galio-framework";

const { height, width } = Dimensions.get("screen");
import Images from "../constants/Images";

import { materialTheme } from "../constants";

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("ResolveAuthScreen");
    }, 2000);
  }

  render() {
    return (
      <Block flex middle style={styles.container}>
        <Block center>
          <Text color={materialTheme.COLORS.BUTTON_COLOR} size={50}>
            Welcome To
          </Text>
        </Block>
        <Block center>
          <Image
            source={Images.Onboarding}
            style={{ height: 400, width: 350 }}
            resizeMode={"contain"}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6dfc5",
  },
});
