import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Block, Text } from "galio-framework";
import { userValue } from "../redux/actions/authAction";
import { connect } from "react-redux";

class RadioButton extends Component {
  render() {
    const { PROP ,usertype} = this.props;
    return (
      <Block  row>
        {PROP.map((item) => {
          return (
            <Block flex row space="around" key={item.value} style={styles.container}>
              <Block middle>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    this.props.userValue({ prop: "usertype", value: item.value });
                  }}
                >
                  {usertype === item.value && <View style={styles.selectedRb} />}
                </TouchableOpacity>
              </Block>
              <Block middle>
                <Text center style={styles.radioText}>
                  {item.text}
                </Text>
              </Block>
            </Block>
          );
        })}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  radioText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
    marginLeft: 10,
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#3740ff",
  },
});

const mapStateToProps = (state) => ({
  usertype: state.auth.usertype,
});

export default connect(mapStateToProps, { userValue })(RadioButton);
