import React, { Component } from "react";

import { View, FlatList, StyleSheet, ScrollView, Image } from "react-native";
import { Block, Icon, Text, Button } from "galio-framework";
import CartItems from "./CartItem";
import { materialTheme } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as RootNavigation from "../navigation/RootNavigation";

class CheckoutItems extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const user = await AsyncStorage.removeItem("user");
    this.setState({ user });
  }

  render() {
    const { cartItems, cartTotal, totalItem, navigation } = this.props;
    const { user } = this.state;
    return (
      <Block flex style={styles.container}>
        <Block row style={styles.annouc}>
          <Text h5 color="white">
            My Cart
          </Text>
          <Text h5 color="green">
            ({totalItem.length} items)
          </Text>
        </Block>
        {totalItem.length === 0 ? (
          <Block flex middle>
            <Image source={require("../assets/cart.png")} resizeMode={"contain"} style={{ width: 150, height: 150 }} />
            <Text size={20}>No items in your cart</Text>
            <Text muted>Your favourites items are just a click away</Text>
            <Button color={materialTheme.COLORS.BUTTON_COLOR} size="small" onPress={() => navigation.navigate("Home")}>
              Start Shopping
            </Button>
          </Block>
        ) : null}

        <Block flex style={styles.items}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={cartItems}
              renderItem={({ item, index }) => <CartItems item={item} index={index} />}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 0.3, backgroundColor: "#34495e" }} />}
            />
          </ScrollView>
        </Block>
        {totalItem.length === 0 ? null : (
          <Block style={styles.cartbutton}>
            <Block row space="between" style={styles.row}>
              <Text>Sub Total</Text>
              <Text>
                {"\u20B9"}
                {cartTotal}
              </Text>
            </Block>
            <Block row space="between" style={styles.row}>
              <Text>Delivery Charges</Text>
              <Text>{"\u20B9"}0</Text>
            </Block>
            <Block row space="between" style={styles.row}>
              <Text>Your Total Savings</Text>
              <Text>{"\u20B9"}0</Text>
            </Block>
            {user === null ? (
              <TouchableOpacity onPress={() => RootNavigation.navigate("LoginFlow")}>
                <Block row space="around" style={styles.cart}>
                  <Icon name="shoppingcart" family="AntDesign" size={20} color="white" />
                  <Text size={16} color="white">
                    Signin
                  </Text>
                  <Text style={styles.text}>
                    {"\u20B9"}
                    {cartTotal}
                  </Text>
                  <Icon name="right" family="AntDesign" size={20} color="white" />
                </Block>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Block row space="around" style={styles.cart}>
                  <Icon name="shoppingcart" family="AntDesign" size={20} color="white" />
                  <Text size={16} color="white">
                    Proceed To Checkout
                  </Text>
                  <Text style={styles.text}>
                    {"\u20B9"}
                    {cartTotal}
                  </Text>
                  <Icon name="right" family="AntDesign" size={20} color="white" />
                </Block>
              </TouchableOpacity>
            )}
          </Block>
        )}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.WHITE,
  },
  annouc: {
    padding: 14,
    borderRadius: 5,
    backgroundColor: "#1c2224",
    margin: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  anncText: {
    textAlign: "center",
    color: "#fff",
  },
  cartbutton: {
    backgroundColor: materialTheme.COLORS.GRAY,
    padding: 7,
  },
  cart: {
    padding: materialTheme.SIZES.BASE * 1,
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    margin: 7,
  },
  row: {
    margin: 5,
  },
});

const mapStateToProps = (state) => ({
  totalItem: state.cart.cart,
  user: state.auth.user,
});

export default connect(mapStateToProps)(CheckoutItems);
