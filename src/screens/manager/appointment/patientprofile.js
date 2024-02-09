import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
const PatientDetail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Icon
          name="angle-left"
          type="font-awesome"
          color={'black'}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 19,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          Appointment
        </Text>
        <Icon name="angle-left" type="font-awesome" color={'transparent'} />
      </View>

      <View
        style={{
          height: 280,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 15,
          elevation: 1,
          backgroundColor: 'white',
          marginTop: 20,
          paddingHorizontal: '5%',
        }}>
        <View
          style={{
            height: 65,
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/dr4.png')}
            style={{height: 50, width: 50}}
          />
          <View
            style={{
              height: 60,
              justifyContent: 'center',
              marginLeft: 10,
              width: '80%',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginBottom: 2,
              }}>
              John Doe
            </Text>
            <Text
              style={{
                color: '#2D2D2D',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Diagnosis: XYZ
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            color: 'grey',
            marginTop: 10,
          }}>
          Appointment Date
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Icon name="calendar" type="antdesign" color={'black'} size={16} />
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontFamily: Theme.fontFamily.medium,
              marginLeft: 5,
            }}>
            16/06/2023
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            color: 'grey',
            marginTop: 10,
          }}>
          Appointment Date
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Icon name="clock" type="feather" color={'black'} size={16} />
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontFamily: Theme.fontFamily.medium,
              marginLeft: 5,
            }}>
            10:30 am
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            color: 'grey',
            marginTop: 10,
          }}>
          Payment (Done)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Icon
            name="checkcircle"
            type="antdesign"
            color={Theme.colors.blueColor}
            size={16}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontFamily: Theme.fontFamily.medium,
              marginLeft: 5,
            }}>
            $150.00
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PatientDetail;
