import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Button from '../../../components/Button/Button';
import {Icon} from '@rneui/themed';

const OnBoarding = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Theme.colors.whiteColor,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '40%',
      }}>
       <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primaryColor}
      />

      <Image
        style={{height: 200, width: '80%'}}
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          color: 'black',
          marginTop: 20,
          width: '75%',
          fontSize: 22,
          fontFamily: Theme.fontFamily.medium,
          textAlign: 'center',
        }}>
        Welcome to Reliable Tire Disposal
      </Text>
  

      <Pressable
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: Theme.colors.primaryColor,
          borderRadius: 10,
          marginTop: 50,
        }}
        onPress={() => navigation.navigate('signin')}>
        <Text
          style={{
            color: 'white',
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
            marginRight: 20,
          }}>
          Continue as a customer
        </Text>
        <Icon
          name="angle-double-right"
          type="font-awesome"
          color={'white'}
          size={20}
        />
      </Pressable>
      <Pressable
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Theme.colors.primaryColor,
        }}
        onPress={() => navigation.navigate('managersignin')}>
        <Text
          style={{
            color: Theme.colors.primaryColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
            marginRight: 20,
          }}>
         Continue as a Manager
        </Text>
        <Icon
          name="angle-double-right"
          type="font-awesome"
          color={Theme.colors.primaryColor}
          size={20}
        />
      </Pressable>
      <Pressable
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Theme.colors.primaryColor,
        }}
        onPress={() => navigation.navigate('adminlogin')}>
        <Text
          style={{
            color: Theme.colors.primaryColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
            marginRight: 20,
          }}>
         Continue as an Admin
        </Text>
        <Icon
          name="angle-double-right"
          type="font-awesome"
          color={Theme.colors.primaryColor}
          size={20}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default OnBoarding;
