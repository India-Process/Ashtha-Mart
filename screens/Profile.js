import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { Block, Text, Input } from "galio-framework";

import { materialTheme } from "../constants";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Profile extends React.Component {
  state = {
    user: null,
  };

  fetchUser = async () => {
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    this.setState({ user });
  };

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate() {
    this.fetchUser();
  }
  render() {
    const { user } = this.state;
    return (
      <Block flex safe style={styles.profile}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block middle safe style={styles.imageContainer}>
            <Image source={require("../assets/avatar.png")} resizeMode={"contain"} style={styles.avatar} />
          </Block>
          {user === null ? (
            <Text center color="red" size={20}>
              My Profile
            </Text>
          ) : (
            <>
              <Block style={styles.container}>
                <Text h3 color={materialTheme.COLORS.BUTTON_COLOR}>
                  Hi {user.name}
                </Text>
                <Text size={18}>8052041524</Text>
              </Block>
              <Block middle style={styles.inputs}>
                {user.user_type == 1 ? (
                  <Input
                    editable={false}
                    label="Member Id *"
                    placeholder={user.member_id}
                    placeholderTextColor="black"
                  />
                ) : null}
                <Input editable={false} label="Name *" placeholder={user.name} placeholderTextColor="black" />
                <Input editable={false} label="Email *" placeholder={user.email} placeholderTextColor="black" />
                <Input editable={false} label="Mobile" placeholder={user.mobile} placeholderTextColor="black" />
              </Block>
            </>
          )}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: materialTheme.COLORS.BORDER_COLOR,
    backgroundColor: "white",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 10,
  },
  text: {
    marginHorizontal: materialTheme.SIZES.BASE * 2,
  },
  main: {
    borderColor: materialTheme.COLORS.BORDER_COLOR,
    borderWidth: 1,
    height: materialTheme.SIZES.BASE * 3,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: materialTheme.SIZES.BASE / 2,
    marginTop: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  inputs: {
    margin: materialTheme.SIZES.BASE,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
