import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Theme from '../../Theme/Theme';
import Icon from 'react-native-vector-icons/Feather';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {moderateScale, scale, verticalScale} from '../../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useDispatch} from 'react-redux';
import { types } from '../../store/actiontypes';
const CustomSidebar = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: '2.5%',
          paddingTop: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        </View>

        <DrawerItemList {...props} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: types.LOGIN.success,
            payload: {},
          });
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Logout successfully!',
            autoClose: 1500,
          });
          navigation.replace('splash');
        }}
        style={{
          flexDirection: 'row',
          gap: moderateScale(12),
          alignItems: 'center',
          bottom: 50,
          position: 'absolute',
          marginLeft: 15,
        }}>
        <Icon name="log-out" size={25} color={Theme.colors.primaryColor} />
        <Text
          style={{
            color: Theme.colors.primaryColor,
            paddingLeft: 10,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
          }}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSidebar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    backgroundColor: Theme.colors.whiteColor,
  },

  imageLogo: {
    width: '60%',
    height: 60,
  },
  lists: {
    width: scale(30),
    height: verticalScale(30),
  },
  D_text: {
    color: Theme.colors.blackColor,
    fontSize: moderateScale(16),
  },
});
