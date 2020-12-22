import React, { PureComponent } from "react";
import { StyleSheet, Dimensions, ScrollView, FlatList, ActivityIndicator, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";

//component
import { SliderBox } from "react-native-image-slider-box";
import Carousel from "pinar";
import { Product, Heading } from "../components";
import { materialTheme } from "../constants";

const { width } = Dimensions.get("screen");

//redux stuff
import { addToCart } from "../redux/actions/cartAction";
import { fetchProducts, fetchBanner, fetchLatest, fetchCategory } from "../redux/actions/productAction";
import { connect } from "react-redux";

class Home extends PureComponent {
  componentDidMount = () => {
    this.props.fetchLatest();
    this.props.fetchProducts();
    this.props.fetchBanner();
    this.props.fetchCategory();
  };

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  };

  renderLatestItem = ({ item }) => {
    return <Product item={item} product={item} addItemsToCart={this.addItemsToCart} />;
  };

  goIndex = () => {
    this.flatList_Ref.scrollToIndex({ animated: true, index: 5 });
  };

  renderItem = ({ item }) => {
    return <Product item={item} product={item} addItemsToCart={this.addItemsToCart} />;
  };

  render() {
    const { loading, latest, products, category, banner } = this.props;

    return (
      <Block flex style={styles.home}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <Block flex middle>
              <ActivityIndicator size="large" color={materialTheme.COLORS.BUTTON_COLOR} />
            </Block>
          ) : (
            <>
              <Block>
                <SliderBox
                  images={banner.map((item) => `http://demo.ashtha.indiaprocess.com${item.photo}`)}
                  dotColor="#FFEE58"
                  inactiveDotColor="#90A4AE"
                  autoplay
                  circleLoop
                  dotStyle={{
                    width: 15,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)",
                  }}
                  ImageComponentStyle={{
                    borderRadius: 5,
                    width: "100%",
                  }}
                  resizeMethod="scale"
                  resizeMode="center"
                  imageLoadingColor={materialTheme.COLORS.BUTTON_COLOR}
                />
              </Block>
              <Heading title="Categories" />
              <Block middle>
                <Carousel loop={true} autoplay={true} height={200} showsDots={false}>
                  {category.map((item) => (
                    <Block flex style={styles.category}>
                      <Block middle style={styles.categoryImage}>
                        <Image source={require("../assets/category.png")} resizeMode={"contain"} />
                      </Block>
                      <Text style={{ marginTop: 10 }}>{item.tcat_name}</Text>
                    </Block>
                  ))}
                </Carousel>
              </Block>
              <Heading title="Latest Product" />
              <Block>
                <FlatList
                  removeClippedSubviews={true}
                  initialNumToRender={2}
                  initialNumToRender={5}
                  numColumns={2}
                  columnWrapperStyle={styles.space}
                  data={latest}
                  renderItem={this.renderLatestItem}
                  keyExtractor={(_, index) => JSON.stringify(index)}
                />
              </Block>
              <Heading title="Featured Product" />
              <Block>
                <FlatList
                  getItemLayout={(data, index) => {
                    return { length: 33, index, offset: 33 * index };
                  }}
                  ref={(ref) => {
                    this.flatList_Ref = ref;
                  }}
                  removeClippedSubviews={true}
                  maxToRenderPerBatch={5}
                  initialNumToRender={2}
                  numColumns={2}
                  columnWrapperStyle={styles.space}
                  data={products}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.id}
                  onEndReachedThreshold={0.5}
                />
              </Block>
            </>
          )}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    padding: 5,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    shadowColor: materialTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },

  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  slider: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  space: {
    flex: 1,
    justifyContent: "space-around",
  },
  category: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: materialTheme.COLORS.BORDER_COLOR,
  },
  categoryImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  products: state.products.items,
  banner: state.products.banner,
  latest: state.products.latest,
  category: state.products.category,
  loading: state.products.loading,
});

export default connect(mapStateToProps, {
  addToCart,
  fetchProducts,
  fetchLatest,
  fetchBanner,
  fetchCategory,
})(Home);
