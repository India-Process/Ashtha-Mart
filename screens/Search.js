import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Block, Icon, Input, Text, theme } from "galio-framework";

import { materialTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("screen");

class Search extends Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = (
      <Icon
        size={16}
        color={materialTheme.COLORS.MUTED}
        name="zoom-in"
        family="material"
      />
    );
    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="Search For Products"
        placeholderTextColor={materialTheme.COLORS.INPUT}
      />
    );
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.container}>{this.renderSearch()}</Block>
          <Block flex safe middle style={styles.imageContainer}>
            <Image
              source={require("../assets/cart.png")}
              resizeMode={"contain"}
              style={styles.image}
            />
            <Text h5>Search Items</Text>
          </Block>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: materialTheme.SIZES.BASE * 3.4,
  },
  search: {
    width: width - materialTheme.SIZES.BASE,
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    height: height / 1.5,
  },
  image: {
    height: 80,
    width: 80,
  },
});

export default Search;
