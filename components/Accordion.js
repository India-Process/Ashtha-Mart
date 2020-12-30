import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import { Block, Text, Icon } from "galio-framework";
const { width } = Dimensions.get("window");
import { materialTheme } from "../constants";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const renderItem = ({ item }) => {
      return (
        <Block card middle height={100} width={width / 3} style={{ backgroundColor: "white" }}>
          <Image source={require("../assets/category.png")} resizeMode={"contain"} width={200} height={200} />
          <Text size={15} center color="black" key={item}>
            {item}
          </Text>
        </Block>
      );
    };

    return (
      <Block>
        <TouchableOpacity ref={this.accordian} onPress={() => this.toggleExpand()}>
          <Block
            card
            row
            space="between"
            style={[styles.category, { backgroundColor: this.state.expanded ? "#bfe271" : "white" }]}
          >
            <Image source={require("../assets/category.png")} resizeMode={"contain"} width={200} height={200} />
            <Text center color="black" size={25}>
              {this.props.title}
            </Text>
            <Icon name={this.state.expanded ? "chevron-up" : "chevron-down"} family="entypo" size={25} />
          </Block>
        </TouchableOpacity>
        {this.state.expanded && (
          <Block style={styles.subcategory}>
            <FlatList
              data={this.props.data}
              renderItem={renderItem}
              numColumns={3}
              keyExtractor={(_, index) => index.toString()}
            />
          </Block>
        )}
      </Block>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  card: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 4,
  },
  category: {
    fontSize: 22,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: -2,
    padding: 30,
    backgroundColor: "white",
  },
  topic: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 18 * 1.5,
  },
  subcategory: {
    marginBottom:10,
    marginTop:10,
  },
});
