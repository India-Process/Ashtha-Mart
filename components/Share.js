import React, { Component } from "react";
import { Share, View, StyleSheet } from "react-native";
import { Block, Button } from "galio-framework";

class ShareScreen extends Component {
  onShare = async () => {
    const {navigation}=this.props;
    try {
      const result = await Share.share({
        message: "http://aasthamart.in",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        navigation.goBack();
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex row style={styles.container}>
        <Button
          icon="back"
          iconFamily="antdesign"
          iconSize={30}
          color="warning"
          iconColor="#fff"
          style={{ backgroundColor: "red" }}
          onPress={() => navigation.goBack()}
        >
          Return
        </Button>
        <Button
          onPress={this.onShare}
          icon="sharealt"
          iconFamily="antdesign"
          iconSize={30}
          color="warning"
          iconColor="#fff"
          style={{ backgroundColor: "green" }}
        >
          Share
        </Button>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6dfc5",
  },
});

export default ShareScreen;
