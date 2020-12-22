import React, { useState } from "react";
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from "../components/";
import { materialTheme } from "../constants/";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react/cjs/react.development";

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state }) {
  const insets = useSafeAreaInsets();
  const screens = ["Home", "Categories", "Signin"];
  const profilescreen = ["Home", "Categories", "Profile", "OrderList", "Address", "Change Password"];

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      const user = JSON.parse(value);
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Block style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
          <Block style={styles.profile}>
            <Image source={require("../assets/avatar.png")} style={styles.avatar} />
            {user === null ? (
              <Text h5 color={"white"}>
                Ashtha Mart
              </Text>
            ) : (
              <Text h5 color={"white"}>
                {user.name}
              </Text>
            )}
          </Block>
        </TouchableWithoutFeedback>
      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {user === null
            ? screens.map((item, index) => {
                return (
                  <DrawerCustomItem
                    title={item}
                    key={index}
                    navigation={navigation}
                    focused={state.index === index ? true : false}
                  />
                );
              })
            : profilescreen.map((item, index) => {
                return (
                  <DrawerCustomItem
                    title={item}
                    key={index}
                    navigation={navigation}
                    focused={state.index === index ? true : false}
                  />
                );
              })}
        </ScrollView>
      </Block>
      <Block flex={0.2} style={{ paddingLeft: 7, paddingRight: 14 }}>
        {user === null ? null : (
          <DrawerCustomItem title="Logout" navigation={navigation} focused={state.index === 8 ? true : false} />
        )}
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "center",
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end",
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(CustomDrawerContent);
