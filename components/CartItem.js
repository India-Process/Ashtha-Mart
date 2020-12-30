import React, { Component } from "react";
import { StyleSheet, Alert, Image } from "react-native";

import { Block, Text, Icon } from "galio-framework";

import { connect } from "react-redux";
import Swipeout from "react-native-swipeout";

import { increment, decrement, removeItem } from "../redux/actions/cartAction";
import { materialTheme } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

class CartItems extends Component {
  state = {
    activeRowKey: null,
  };

  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        this.setState({ activeRowKey: null });
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.id });
      },
      right: [
        {
          onPress: () => {
            const deleteRow = this.state.activeRowKey;
            Alert.alert(
              "Alert",
              "Are you sure you want to delete?",
              [
                {
                  text: "No",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: () => {
                    this.props.removeItem({
                      index: this.props.index,
                      item: this.props.item,
                    });
                  },
                },
              ],
              { cancelable: true }
            );
          },
          text: "Delete",
          type: "delete",
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    const { item, index } = this.props;
    return (
      <Swipeout {...swipeSettings}>
        <Block row style={styles.container} key={index}>
          <Block middle style={styles.image}>
            <Image
              source={{
                uri: `http://demo.ashtha.indiaprocess.com${item.imagepath}`,
              }}
              resizeMode={"contain"}
              style={styles.image}
            />
          </Block>
          <Block style={styles.textContainer}>
            <Block flex style={{ width: materialTheme.SIZES.BASE * 12 }}>
              <Text>{item.name}</Text>
              <Text style={styles.text}>
                <Icon name="price-tag" family="Entypo" size={16} />
                {"\u20B9"}
                {item.currentprice}
              </Text>
            </Block>
            <Block flex row space="between">
              <Block middle>
                <Text>Quantity-{item.quantity2}</Text>
              </Block>
              <Block flex row space="between" middle style={styles.add}>
                <TouchableOpacity onPress={() => this.props.decrement(item)}>
                  <Icon name="minus" family="Entypo" size={30} color="green" />
                </TouchableOpacity>
                <Text size={20}>{item.quantity2}</Text>
                <TouchableOpacity onPress={() => this.props.increment(item)}>
                  <Icon name="plus" family="Entypo" size={30} color="green" />
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
          <Block style={styles.close}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Alert",
                  "Are you sure you want to delete?",
                  [
                    {
                      text: "No",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        this.props.removeItem({
                          index: this.props.index,
                          item: this.props.item,
                        });
                      },
                    },
                  ],
                  { cancelable: true }
                )
              }
            >
              <Icon name="close" family="AntDesign" size={25} />
            </TouchableOpacity>
          </Block>
        </Block>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: materialTheme.COLORS.WHITE,
    margin: 5,
    padding: 4,
  },
  textContainer: {
    padding: 0,
  },
  text: {
    fontSize: 14,
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  close: {
    right: 0,
    position: "absolute",
    padding: 10,
  },
  add: {
    marginLeft: materialTheme.SIZES.BASE*5,
  },
});

export default connect(null, { increment, decrement, removeItem })(CartItems);
