import * as React from "react";
import { TouchableOpacity, StyleSheet, Image, FlatList, Dimensions, ScrollView,Alert } from "react-native";
import { Transitioning, Transition } from "react-native-reanimated";
import { Block, Text, Icon } from "galio-framework";
import { connect } from "react-redux";

const { width } = Dimensions.get("window");

const transition = (
  <Transition.Together>
    <Transition.Out type="fade" durationMs={200} interpolation="easeOut" />
    <Transition.Change />
    <Transition.In type="fade" durationMs={200} interpolation="easeIn" />
  </Transition.Together>
);

const colors = [
  {
    bg: "#A8DDE9",
    color: "#3F5B98",
    category: "Healthcare",
    subCategories: ["Skincare", "Personal care", "Health", "Eye care"],
  },
  {
    bg: "#086E4B",
    color: "#FCBE4A",
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
    bg: "#FECBCA",
    color: "#FD5963",
    category: "Beauty",
    subCategories: ["Skincare", "Makeup", "Nail care", "Perfume"],
  },
  {
    bg: "#193B8C",
    color: "#FECBCD",
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
    bg: "#FDBD50",
    color: "#F5F5EB",
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
];

const Accordion = () => {
  const ref = React.useRef();
  const [selectedColor, setSelectedColor] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState(colors);

  const onClick = (index) => {
    const temp = data.slice();
    temp[index].value = !temp[index].value;
    setData(temp);
  };

  const toggleExpand = (index) => {
    setExpanded(!expanded);
  };

  const renderItem = ({ item }) => {
    return (
      <Block card middle height={100} width={width / 3}>
        <Image source={require("../assets/category.png")} resizeMode={"contain"} width={200} height={200} />
        <Text size={15} center color="black" key={item}>
          {item}
        </Text>
      </Block>
    );
  };

  return (
    <Transitioning.View ref={ref} transition={transition} style={styles.container}>
      {data.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            activeOpacity={0.9}
            onPress={() => {
              ref.current.animateNextTransition();
              setSelectedColor(bg === selectedColor ? "" : bg);
              onClick(index);
              toggleExpand();
            } }
            style={styles.cardContainer}
          >
            <Block card style={[styles.card]}>
              <Block flex row space="between" style={styles.category}>
                <Image source={require("../assets/category.png")} resizeMode={"contain"} width={200} height={200} />
                <Text center color="black" size={25}>
                  {category}
                </Text>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} family="entypo" size={25} />
              </Block>

              {selectedColor === bg && (
                <Block style={{ marginTop: 20, backgroundColor: "white" }}>
                  <FlatList
                    data={subCategories}
                    renderItem={renderItem}
                    numColumns={3}
                    keyExtractor={(_, index) => index.toString()} />
                </Block>
              )}
            </Block>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
};

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
  },
  topic: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 18 * 1.5,
  },
});

const mapStateToProps = (state) => ({
  category: state.products.category,
});

export default connect(mapStateToProps)(Accordion);
