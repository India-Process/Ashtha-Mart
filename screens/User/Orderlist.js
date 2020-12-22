import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Block, Icon, Text } from "galio-framework";
import { materialTheme } from "../../constants";

const DATA = [
  {
    id: 1,
    order: "#1",
    date: "11/12/2020",
    status: "pending",
    total: "200",
  },
  {
    id: 2,
    order: "#2",
    date: "11/12/2020",
    status: "pending",
    total: "200",
  },
  {
    id: 3,
    order: "#3",
    date: "11/12/2020",
    status: "delayed",
    total: "200",
  },
  {
    id: 4,
    order: "#4",
    date: "11/12/2020",
    status: "canceled",
    total: "200",
  },
  {
    id: 5,
    order: "#5",
    date: "11/12/2020",
    status: "inprogress",
    total: "200",
  },
  {
    id: 6,
    order: "#6",
    date: "11/12/2020",
    status: "placed",
    total: "200",
  },
];



class OrderList extends Component {
  renderColor() {
    switch (title) {
      case pending:
        return { backgroundColor: "orange" };
      case canceled:
        return { backgroundColor: "red" };
      case inprogrss:
        return { backgroundColor: "orange" };
      case placed:
        return { backgroundColor: "green" };
      default:
        return;
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Block style={styles.container}>
          <Text center h5>
            Order List
          </Text>
          <Block style={[styles.main]}>
            <Block row space="between" style={styles.list}>
              <Block row>
                <Text>Order</Text>
                <Icon name="filter" family="AntDesign" size={15} />
              </Block>
              <Block row>
                <Text>Date Purchased</Text>
                <Icon name="filter" family="AntDesign" size={15} />
              </Block>
              <Block row>
                <Text>Status</Text>
                <Icon name="filter" family="AntDesign" size={15} />
              </Block>
              <Block row>
                <Text>Total</Text>
                <Icon name="filter" family="AntDesign" size={15} />
              </Block>
              <Block>
                <Text>Action</Text>
              </Block>
            </Block>
            {DATA.map((item) => {
              return (
                <Block row space="between" style={styles.list}>
                  <Block row>
                    <Text>{item.order}</Text>
                  </Block>
                  <Block row>
                    <Text>{item.date}</Text>
                  </Block>
                  <Block row style={styles.status}>
                    <Text color={materialTheme.COLORS.WHITE}>
                      {item.status}
                    </Text>
                  </Block>
                  <Block row>
                    <Text>{item.total}</Text>
                  </Block>
                  <Block>
                    <Icon name="eye" family="Entypo" size={15} />
                  </Block>
                </Block>
              );
            })}
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: materialTheme.SIZES.BASE,
  },
  main: {
    margin: materialTheme.SIZES.BASE,
  },
  list: {
    alignItems: "center",
    padding: materialTheme.SIZES.BASE,
    borderColor: materialTheme.COLORS.BORDER_COLOR,
    borderWidth: 2,
    margin: 2,
  },
  status: {
    backgroundColor: "green",
    padding: 2,
  },
});

export default OrderList;
