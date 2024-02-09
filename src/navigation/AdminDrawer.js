import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Theme from '../Theme/Theme';
import CustomSidebar from './custom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from '@rneui/themed';
import AdminHome from '../screens/admin/home';
import AdminCustomer from '../screens/admin/customer';
import Adminorder from '../screens/admin/order';
import AdminBooks from '../screens/admin/books';
import AdminManger from '../screens/admin/manager';
import AdminDriver from '../screens/admin/driver';
import ResetPassword from '../screens/auth/reset';
import FulfilledOrders from '../screens/admin/order/FulfilledOrder';
import CompareOrders from '../screens/admin/order/CompareOrders';
const AdminDrawer = ({navigation, route}) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          borderTopEndRadius: 40,
          width: '80%',
        },

        headerShown: false,
        drawerLabelStyle: {
          fontFamily: Theme.fontFamily.medium,
          color: Theme.colors.primaryColor,

          fontSize: 14,
        },
      }}
      drawerContent={props => <CustomSidebar {...props} />}
      initialRouteName="home">
      <Drawer.Screen
        name="Dashboard"
        component={AdminHome}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="dashboard"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Manager Creation"
        component={AdminManger}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="user"
              type="feather"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Driver Creation"
        component={AdminDriver}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="user"
              type="feather"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cx Creation"
        component={AdminCustomer}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="user"
              type="feather"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Adminorder}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calendar"
              type="font-awesome"
              size={25}
              color={Theme.colors.primaryColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Fulfilled Orders"
        component={FulfilledOrders}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calendar-minus-o"
              type="font-awesome"
              size={25}
              color={Theme.colors.primaryColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Compared Orders"
        component={CompareOrders}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calendar-check-o"
              type="font-awesome"
              size={25}
              color={Theme.colors.primaryColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Books"
        component={AdminBooks}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="address-book-o"
              type="font-awesome"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reset Password"
        component={ResetPassword}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="setting"
              type="antdesign"
              color={Theme.colors.primaryColor}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminDrawer;
