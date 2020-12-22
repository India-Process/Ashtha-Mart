import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Block, NavBar, Input, Text, theme } from "galio-framework";

import Icon from "./Icon";

import { connect } from "react-redux";
import { materialTheme } from "../constants";

const { width } = Dimensions.get("window");
const iPhoneX = () => Platform.OS === "ios" && (height === 812 || width === 812 || height === 896 || width === 896);

const BasketButton = ({ style, navigation, item }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate("Checkout")}>
    <Icon family="FontAwesome" size={25} name="shopping-basket" color={materialTheme.COLORS.WHITE} />
    <Block middle style={styles.notify}>
      <Text color={materialTheme.COLORS.WHITE}>{item ? item : 0}</Text>
    </Block>
  </TouchableOpacity>
);

const SearchButton = ({ style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate("Search")}>
    <Icon size={20} family="entypo" name="magnifying-glass" color={materialTheme.COLORS.WHITE} />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation, cartItems } = this.props;

    if (title === "Title") {
      return [<BasketButton key="basket-title" navigation={navigation} item={cartItems.length} />];
    }

    switch (title) {
      case "Home":
        return [<BasketButton key="basket-home" navigation={navigation} item={cartItems.length} />];

      case "Categories":
        return [<BasketButton key="basket-categories" navigation={navigation} item={cartItems.length} />];
      case "Category":
        return [<BasketButton key="basket-deals" navigation={navigation} isWhite={white} item={cartItems.length} />];
      case "Profile":
        return [<BasketButton key="basket-deals" navigation={navigation} isWhite={white} item={cartItems.length} />];
      case "Product":
        return [<BasketButton key="basket-product" navigation={navigation} isWhite={white} item={cartItems.length} />];
      case "Search":
        return [
          <SearchButton key="basket-key" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-search" navigation={navigation} isWhite={white} item={cartItems.length} />,
        ];
      case "Settings":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "Signin":
        return [<BasketButton key="basket-search" navigation={navigation} isWhite={white} />];
      case "Signup":
        return [<BasketButton key="basket-search" navigation={navigation} />];
      case "Product Detail":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "Checkout":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "User":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "Address":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "Order List":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      case "Change Password":
        return [<BasketButton key="basket-search" navigation={navigation} item={cartItems.length} />];
      default:
        break;
    }
  };

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        placeholderTextColor={materialTheme.COLORS.MUTED}
        onFocus={() => navigation.navigate("Search")}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="magnifying-glass" family="Entypo" />}
      />
    );
  };

  renderHeader = () => {
    const { search } = this.props;
    if (search) {
      return <Block center>{search ? this.renderSearch() : null}</Block>;
    }
    return null;
  };

  render() {
    const { back, title, transparent } = this.props;
    const headerStyles = [transparent ? { backgroundColor: "#e18f34" } : null];
    return (
      <Block safe style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          left={
            <TouchableOpacity onPress={this.handleLeftPress}>
              <Icon name={back ? "chevron-left" : "menu"} family="entypo" color="white" size={25} />
            </TouchableOpacity>
          }
          right={this.renderRight()}
          rightStyle={{ alignItems: "center" }}
          leftStyle={{ flex: 0.4, paddingTop: 2, colo: "white" }}
          //leftIconName={back ? "chevron-left" : "navicon"}
          leftIconColor={materialTheme.COLORS.WHITE}
          titleStyle={[styles.title, { color: materialTheme.COLORS.WHITE }]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    paddingBottom: theme.SIZES.BASE,
    justifyContent: "center",
    alignItems: "center",
    color: materialTheme.COLORS.WHITE,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 3 : theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 1.5,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    borderRadius: 4,
    height: theme.SIZES.BASE,
    width: theme.SIZES.BASE / 2,
    position: "absolute",
    top: 5,
    right: 8,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 40,
    width: width - 32,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 20,
    marginTop: 2,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 15,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
});
