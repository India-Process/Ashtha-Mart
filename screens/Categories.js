import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

class Categories extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex middle style={styles.container}>
          <FlatList
            data={category}
            renderItem={({ item }) => (
              <Block style={styles.category}>
                <Image
                  source={require("../assets/package.png")}
                  resizeMode={"contain"}
                  style={{ width: 50, height: 50 }}
                />
                <Block middle style={styles.name}>
                  <Text>{item.tcat_name}</Text>
                </Block>
              </Block>
            )}
            numColumns={3}
            keyExtractor={(item) => item.tcat_id}
          />
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.SIZES.BASE,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    height:height
  },

  category: {
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    margin: 5,
    width: 100,
  },
  name: {},
});

const mapStateToProps = (state) => ({
  category: state.products.category,
});

export default connect(mapStateToProps)(Categories);
