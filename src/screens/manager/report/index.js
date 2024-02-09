import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';

import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');

const ManagerReport = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: Theme.colors.whiteColor,
      }}>
      <View
        style={{
          height: 70,
          width: '100%',
          paddingHorizontal: '2.5%',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
          }}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Theme.colors.textColor}
            size={28}
          />
        </Pressable>
      </View>
      <View
        style={{
          height: '60%',
          width: '100%',
          // backgroundColor: 'green',
          paddingHorizontal: '5%',
   
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Theme.fontFamily.medium,
            color: 'black',
            alignSelf: 'center',
          }}>
          Report a problem
        </Text>
        <View
          style={{
            width: '100%',
            // marginRight:"5%",
            // backgroundColor:"red"
            paddingTop: '10%',
          }}>
          <Input
            placeholder={' Name '}
            iconName={'user'}
            iconType={'antdesign'}
            label={'Name'}
            width={80}
          />
          <Input
            label="Email"
            placeholder={' email'}
            iconName={'mail'}
            iconType={'feather'}
            width={75}
          />
          <View
            style={{
              height: 100,
              width: '100%',
              borderWidth: 1,
              borderColor: Theme.colors.grey,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="*Note a problem"
              placeholderTextColor={'grey'}
              style={{
                color: Theme.colors.textColor,
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}
            />
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Button title={'Submit'} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};
export default ManagerReport;
