import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import { materialTheme } from "../constants";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
const { height } = Dimensions.get("screen");

class ResolveAuthScreen extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const user = await AsyncStorage.getItem("user");

    if (user) {
      navigation.navigate("MainFlow");
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "MainFlow" }],
        })
      );
    } else {
      navigation.navigate("Onboarding");
    }
  }

  render() {
    return (
      <Block flex middle style={styles.container}>
        <ActivityIndicator size="large" color={materialTheme.COLORS.WHITE} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ResolveAuthScreen);
