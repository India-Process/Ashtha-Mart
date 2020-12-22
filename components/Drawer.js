import React,{Component} from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";



class DrawerItem extends Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    switch (title) {
      case "Home":
        return (
          <Icon size={16} name="shop" family="GalioExtra" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      case "Categories":
        return <Icon size={16} name="list" family="Entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;

      case "Profile":
        return (
          <Icon size={16} name="circle-10" family="GalioExtra" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      case "OrderList":
        return <Icon size={16} name="list" family="feather" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Address":
        return <Icon size={16} name="address" family="entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Change Password":
        return (
          <Icon size={16} name="gears" family="font-awesome" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      case "Signin":
        return <Icon size={16} name="login" family="Entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Signup":
        return (
          <Icon size={16} name="adduser" family="AntDesign" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      case "Logout":
        return (
          <Icon size={16} name="ios-log-out" family="ionicon" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation,user } = this.props;

    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => {
          navigation.navigate(title);
        }}
      >
        <Block flex row style={[styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]}>
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text size={18} color={focused ? "white" : "black"}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
});
