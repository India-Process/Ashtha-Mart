import React, { Component } from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme, Button, Icon } from "galio-framework";

import { materialTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Product extends Component {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  };

  render() {
    const { navigation, product, style, priceColor } = this.props;
    return (
      <Block flex   style={[styles.product, style]}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Detail", { product: product })}
        >
          <Block style={styles.imageContainer}>
            <Image
              source={{
                uri: `http://aasthamart.in${product.imagepath}`,
              }}
              resizeMode={"contain"}
              style={styles.image}
            />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Detail", { product: product })}
        >
          <Block flex space="between" style={styles.productDescription}>
            <Text size={12} style={styles.productTitle}>
              {product.name}
            </Text>
            <Block row space="evenly">
              <Text muted size={14} color={priceColor} style={styles.strike}>
                {"\u20B9"}
                {product.oldprice}
              </Text>
              <Text center size={14} color={priceColor}>
                <Icon
                  name="price-tag"
                  family="Entypo"
                  size={15}
                  color="black"
                />
                {"\u20B9"}
                {product.currentprice}
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Block row flex style={styles.cart}>
            <Button
              size="small"
              color={materialTheme.COLORS.BUTTON_COLOR}
              style={{ width: 100, height: 30 }}
              onPress={this.addToCart}
            >
              Add To Cart
            </Button>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}
export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: 5,
    minHeight: 100,
    flexDirection: "column",
    margin: 5,
    width:width/2
  },
  productTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
    justifyContent: "center",
    margin: 5,
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  cart: {
    borderRadius: 4,
    justifyContent: "center",
    marginBottom: 7,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  image: {
    height: 150,
    width: "100%",
  },
  strike: {
    textDecorationLine: "line-through",
  },
});
