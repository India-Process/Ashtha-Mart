import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Accordian from "../components/Accordion";

import { Block } from "galio-framework";

export default class App extends Component {
  state = {
    data: [
      {
        category: "Healthcare",
        subCategories: ["Skincare", "Personal care", "Health", "Eye care"],
      },
      {
        category: "Food & Drink",
        subCategories: [
          "Fruits & Vegetables",
          "Frozen Food",
          "Bakery",
          "Snacks & Desserts",
          "Beverages",
          "Alcoholic beverages",
          "Noodles & Pasta",
          "Rice & Cooking oil",
        ],
      },
      {
        category: "Beauty",
        subCategories: ["Skincare", "Makeup", "Nail care", "Perfume"],
      },
      {
        category: "Baby & Kids",
        subCategories: [
          "Toys",
          "Trolleys",
          "LEGO®",
          "Electronics",
          "Puzzles",
          "Costumes",
          "Food",
          "Hygiene & Care",
          "Child's room",
          "Feeding accessories",
        ],
      },
      {
        category: "Homeware",
        subCategories: [
          "Air purifiers",
          "Stoves, hoods & ovens",
          "Refrigerators",
          "Coffee & Tea",
          "Air conditioning",
          "Grilling",
          "Vacuum cleaners",
        ],
      },
    ],
  };

  renderAccordians = () => {
    const items = [];
    for (let item of this.state.data) {
      items.push(<Accordian key={item.category} title={item.category} data={item.subCategories} />);
    }
    return items;
  };

  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.container}>{this.renderAccordians()}</Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
