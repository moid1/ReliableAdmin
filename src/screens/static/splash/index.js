import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Theme from '../../../Theme/Theme';
import {useSelector} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  console.log('response from userData', userData);
  useEffect(() => {
    setTimeout(() => {
      if (userData?.user?.id && Number(userData?.user?.type) === 0) {
        navigation.replace('adminhome');
      } else if (userData?.user?.id && Number(userData?.user?.type) === 3) {
        navigation.replace('patienthome');
      } else if (userData?.user?.id) {
        navigation.replace('doctorhome');
      } else {
        navigation.replace('adminlogin');
      }
    }, 2000);
  }, []);
  // useEffect(() => {

  // }, []);
  return (
    <View
      style={{
        backgroundColor: Theme.colors.whiteColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primaryColor}
      />
      <Image
        style={{width: '80%', height: 200}}
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default SplashScreen;
