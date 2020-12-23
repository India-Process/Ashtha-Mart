import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import Search from "../screens/Search";

import ProfileScreen from "../screens/Profile";
import User from "../screens/User/User";
import Address from "../screens/User/Address";
import ChangePassword from "../screens/User/ChangPassword";

import ResolveAuthScreen from "../screens/ResolveAuthScreen";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Logout from "../screens/Logout";

import ProductDetail from "../screens/ProductDetail";
import Checkout from "../screens/Checkout";
import Receipt from "../screens/Receipt";
import Categories from "../screens/Categories";

import CustomDrawerContent from "./Menu";
import { Icon, Header } from "../components";
import { Images, materialTheme } from "../constants/";
import OrderList from "../screens/User/Orderlist";
import ShareScreen from "../components/Share";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Ashtha Mart",
  type: "Customer",
};

function CategoryStack(props) {
  return (
    <Stack.Navigator initialRouteName="Categories" mode="card" headerMode="screen">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Categories" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function PasswordStack(props) {
  return (
    <Stack.Navigator initialRouteName="Change Password" mode="card" headerMode="screen">
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Change Password" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Profile" scene={scene} navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          header: ({ navigation, scene }) => (
            <Header white back transparent title="Profile" scene={scene} navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          header: ({ navigation, scene }) => (
            <Header white back transparent title="Address" scene={scene} navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: ({ navigation, scene }) => (
            <Header white back transparent title="Change Password" scene={scene} navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          header: ({ navigation, scene }) => (
            <Header white back transparent title="Order List" scene={scene} navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function SigninStack(props) {
  return (
    <Stack.Navigator initialRouteName="Sign In" mode="card" headerMode="screen">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          header: ({ navigation, scene }) => <Header title="Signin" scene={scene} navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          header: ({ navigation, scene }) => <Header title="Signup" scene={scene} navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}

function LogoutStack() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}

function OrderListStack(props) {
  return (
    <Stack.Navigator initialRouteName="OrderList" mode="card" headerMode="screen">
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Order List" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AddressStack(props) {
  return (
    <Stack.Navigator initialRouteName="Address" mode="card" headerMode="screen">
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Address" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SignupStack(props) {
  return (
    <Stack.Navigator initialRouteName="Sign up" mode="card" headerMode="screen">
      <Stack.Screen
        name="Sign Up"
        component={Signup}
        options={{
          header: ({ navigation, scene }) => <Header title="Signup" scene={scene} navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen" initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header search transparent tabs title="Home" navigation={navigation} scene={scene} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Product Detail" scene={scene} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          header: ({ navigation, scene }) => (
            <Header white transparent title="Checkout" scene={scene} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{
          header: ({ navigation, scene }) => (
            <Header back transparent title="Receipt" scene={scene} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoryStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header back transparent title="Categories" navigation={navigation} scene={scene} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({ navigation, scene }) => (
            <Header white back transparent title="Search" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} profile={profile} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => <Icon size={16} name="shop" family="GalioExtra" color={focused} />,
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoryStack}
        options={{
          drawerIcon: ({ focused }) => <Icon size={16} name="list" family="Entypo" color={focused} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="OrderList"
        component={OrderListStack}
        options={{
          drawerIcon: ({ focused }) => <Icon size={16} name="order" family="entypo" color={focused} />,
        }}
      />
      <Drawer.Screen
        name="Address"
        component={AddressStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="address-book"
              family="Foundation"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Change Password"
        component={PasswordStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Signin"
        component={LoginFlow}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon size={16} name="ios-log-in" family="ionicon" color={focused ? "white" : materialTheme.COLORS.MUTED} />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={SignupStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-person-add"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="ios-log-out"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen name="Share" component={ShareScreen} />
    </Drawer.Navigator>
  );
}

function LoginFlow() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={AppStack} />
    </Stack.Navigator>
  );
}
function MainFlow() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

export default function OnboardingStack({ navigation }) {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      options={{
        header: null,
      }}
    >
      <Stack.Screen name="ResolveAuthScreen" component={ResolveAuthScreen} options={{ gestureEnabled: false }} />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="LoginFlow" component={LoginFlow} />
      <Stack.Screen name="MainFlow" component={MainFlow} options={{ gestureEnabled: false }} />
    </Stack.Navigator>
  );
}
