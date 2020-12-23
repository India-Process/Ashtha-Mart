import React,{Component} from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import {Accordion} from "../components"

class Categories extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Block middle style={styles.container}>
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
          </Block> */}
          <Accordion />
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => ({
  category: state.products.category,
});

export default connect(mapStateToProps)(Categories);
