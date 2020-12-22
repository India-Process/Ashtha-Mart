import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { Block, Input, Text, Button } from "galio-framework";
import { materialTheme } from "../../constants";

import { connect } from "react-redux";
import { userValue, createAddress } from "../../redux/actions/userAction";

class Address extends Component {
  state = {
    errorMessage: "",
  };

  onSubmit() {
    const { cust_cname, cust_country, cust_state, cust_city, cust_zip, cust_address } = this.props;
    if (!cust_cname || !cust_country || !cust_state || !cust_city || !cust_zip || !cust_address) {
      this.setState({ errorMessage: "Please fill in all fields" });
    } else {
      this.props.createAddress({ cust_cname, cust_country, cust_state, cust_city, cust_zip, cust_address });
    }
  }

  render() {
    const {
      cust_cname,
      cust_country,
      cust_state,
      cust_city,
      cust_zip,
      cust_address,
      navigation,
      userValue,
      message,
      error,
    } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex safe middle style={styles.main}>
          <Text h5>Contact Address</Text>
          {message ? (
            <Text cener color="green" size={20}>
              {message}
            </Text>
          ) : null}
          {error ? (
            <Text center color="red" size={20}>
              {error}
            </Text>
          ) : null}
          <Block style={styles.container}>
            <Input
              label="Company *"
              placeholder="Company"
              color="black"
              placeholderTextColor="gray"
              value={cust_cname}
              onChangeText={(text) => userValue({ prop: "cust_cname", value: text })}
            />

            <Input
              label="Country *"
              placeholder="Country"
              color="black"
              placeholderTextColor="gray"
              value={cust_country}
              onChangeText={(text) => userValue({ prop: "cust_country", value: text })}
            />
            <Input
              label="State *"
              placeholder="State"
              color="black"
              placeholderTextColor="gray"
              value={cust_state}
              onChangeText={(text) => userValue({ prop: "cust_state", value: text })}
            />

            <Input
              label="Zip Code *"
              placeholder="Zip Code"
              color="black"
              placeholderTextColor="gray"
              value={cust_zip}
              onChangeText={(text) => userValue({ prop: "cust_zip", value: text })}
            />
            <Input
              label="City *"
              placeholder="City"
              color="black"
              placeholderTextColor="gray"
              value={cust_city}
              onChangeText={(text) => userValue({ prop: "cust_city", value: text })}
            />

            <Input
              label="Address  *"
              placeholder="Address "
              color="black"
              placeholderTextColor="gray"
              value={cust_address}
              onChangeText={(text) => userValue({ prop: "cust_address", value: text })}
            />

            <Block row>
              <Button color={materialTheme.COLORS.ERROR} onPress={() => navigation.goBack()}>
                Cancel
              </Button>
              <Button color={materialTheme.COLORS.SUCCESS} onPress={this.onSubmit}>
                Update Address
              </Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {},
  container: {
    margin: materialTheme.SIZES.BASE,
    padding: materialTheme.SIZES.BASE,
  },
});

const mapStateToProps = ({ user }) => {
  const { cust_cname, cust_country, cust_state, cust_city, cust_zip, cust_address, message, error } = user;
  return {
    cust_cname,
    cust_country,
    cust_state,
    cust_city,
    cust_zip,
    cust_address,
    message,
    error,
  };
};

export default connect(mapStateToProps, { userValue, createAddress })(Address);
