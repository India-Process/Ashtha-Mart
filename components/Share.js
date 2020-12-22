import React, { useEffect } from "react";
import { Block, Button } from "galio-framework";
import { Share } from "react-native";

import { materialTheme } from "../constants";

const ShareScreen = ({ navigation }) => {
  useEffect(() => {
    share();
  });

  const share = async () => {
    try {
      const result = await Share.share({
        message: "http://aasthamart.in/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
          navigation.goBack();
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        navigation.goBack();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return null;
  // <Block flex middle>
  //   <Button color={materialTheme.COLORS.BUTTON_COLOR} onPress={share}>
  //     Share App
  //   </Button>
  // </Block>
};
export default ShareScreen;
