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

const ChooseType = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Theme.colors.whiteColor,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '15%',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.blackColor}
      />
      <Text
        style={{
          color: 'black',
          marginTop: 20,
          width: '75%',
          fontSize: 22,
          fontFamily: Theme.fontFamily.semibold,
          textAlign: 'center',
        }}>
        Choose user type
      </Text>
      <Image
        style={{height: 200, width: '100%'}}
        source={require('../../../assets/type.png')}
        resizeMode="contain"
      />

      <Pressable
        style={{
          height: 70,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: "rgba(147, 194, 60, 0.2)",
          borderRadius: 8,
          marginTop: 50,
        }}
        onPress={() => navigation.navigate('register', {type: 'patient'})}>
        {/* <Icon
          name="angle-double-right"
          type="font-awesome"
          color={'rgba(26, 24, 24, 1)'}
          size={20}
        /> */}
          <Image
        style={{height: 25, width: 25}}
        source={require('../../../assets/patient.png')}
        resizeMode="contain"
      />
        <Text
          style={{
            color: 'rgba(26, 24, 24, 1)',
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
            marginLeft: 20,
          }}>
          I am a Patient
        </Text>
      </Pressable>
      <View
          style={{
            height: 40,
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',marginVertical:20,
          }}>
          <View style={{backgroundColor: '#A6A6A6', width: '35%', height: 1.5}} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: Theme.fontFamily.semibold,
              color: 'rgba(45, 45, 45, 0.7)',
            }}>
            OR
          </Text>
          <View style={{backgroundColor: '#A6A6A6', width: '35%', height: 1.5}} />
        </View>
      <Pressable
        style={{
          height: 70,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'rgba(235, 87, 87, 0.2)',
          borderRadius: 8,
        
        }}
        onPress={() => navigation.navigate('register', {type: 'doctor'})}>
        <Image
        style={{height: 25, width: 25}}
        source={require('../../../assets/doctor.png')}
        resizeMode="contain"
      />
        <Text
          style={{
            color: 'rgba(26, 24, 24, 1)',
            fontFamily: Theme.fontFamily.medium,
            fontSize: 16,
            marginLeft: 20,
          }}>
          I am a Doctor
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default ChooseType;
