import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme, Button } from "galio-framework";
import { Icon } from "../components";
import { materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
const { width, height } = Dimensions.get("screen");

import { connect } from "react-redux";
import { addToCart, increment, decrement } from "../redux/actions/cartAction";

class ProductDetail extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  };

  render() {
    const { route, count } = this.props;
    const { product } = route.params;
    const regex = /(<([^>]+)>)/gi;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex style={styles.card}>
          <Block flex style={styles.imageContainer}>
            <Image
              source={{
                uri: `http://demo.ashtha.indiaprocess.com${product.imagepath}`,
              }}
              resizeMode={"contain"}
              style={styles.image}
            />
          </Block>
          <Block style={{ paddingBottom: -HeaderHeight * 2 }}></Block>
          <Block style={styles.profileTexts}>
            <Text color="green" size={25}>
              {"\u20B9"}
              {product.oldprice}
            </Text>
            <Text color="black" size={28} style={{ paddingBottom: 8 }}>
              {product.name}
            </Text>
            <Text>{product.description.replace(regex, "")}</Text>
          </Block>

          {/**  <Block row space="around" style={styles.quantity}>
            <Text>Quantity</Text>
            <TouchableOpacity onPress={() => this.props.decrement(product)}>
              <Icon name="minus" family="Entypo" size={20} color="green" />
            </TouchableOpacity>
            <Text>{product.quantity2}</Text>
            <TouchableOpacity onPress={() => this.props.increment(product)}>
              <Icon name="plus" family="Entypo" size={20} color="green" />
            </TouchableOpacity>
            </Block>*/}
          <Block flex style={styles.cart}>
            <Button
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => this.props.addToCart(product)}
            >
              Add To Cart
            </Button>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.cart.count,
});

export default connect(mapStateToProps, {
  addToCart,
  increment,
  decrement,
})(ProductDetail);

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    margin: 5,
    backgroundColor: "white",
    shadowColor: materialTheme.COLORS.BORDER_COLOR,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 5,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: height / 4,
  },
  imageContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
  },

  cart: {
    justifyContent: "center",
    alignItems: "center",
    padding: materialTheme.SIZES.BASE / 2,
  },
  quantity: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: materialTheme.COLORS.BORDER_COLOR,
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
