import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';

const CustomerSetting = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
          }}>
          Settings
        </Text>
      </View>

      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: 20,
        }}>
        <Pressable
          onPress={() => navigation.navigate('reset')}
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/privacy.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Reset Password
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </Pressable>
        {/* <View
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 2,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/privacy.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Privacy policy
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </View>
        <View
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 2,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/terms.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Terms of services
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('report')}
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',

            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/question.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Report a problem
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </Pressable> */}
      </View>
      <Pressable
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
          height: 30,
          width: '40%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: '20%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 30, width: 30}}
          resizeMode="contain"
          source={require('../../../assets/logout.png')}
        />
        <Text
          style={{
            color: '#EB5757',
            fontSize: 18,
            fontFamily: Theme.fontFamily.semibold,
            marginLeft: 10,
          }}>
          Log out
        </Text>
      </Pressable>
    </View>
  );
};
export default CustomerSetting;
