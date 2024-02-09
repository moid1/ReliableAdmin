import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ManagerHome from '../screens/manager/home';
import Theme from '../Theme/Theme';
import CustomSidebar from './custom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Customercreation from '../screens/manager/customer';
import Ordercreation from '../screens/manager/order';
import ManagerSetting from '../screens/manager/setting';
import {Icon} from '@rneui/themed';
import ManagerBooks from '../screens/manager/books';
import ResetPassword from '../screens/auth/reset';
import FulfilledOrders from '../screens/admin/order/FulfilledOrder';
import CompareOrders from '../screens/admin/order/CompareOrders';
const Drawer = ({navigation, route}) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          borderTopEndRadius: 40,
          width: '70%',
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
        component={ManagerHome}
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
        name="Cx Creation"
        component={Customercreation}
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
        component={Ordercreation}
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
        component={ManagerBooks}
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

export default Drawer;
