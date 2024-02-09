import React, {useState} from 'react';

import {View, Text, Image, ScrollView, Pressable, FlatList} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
const Customerhome = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  const [Orders, setOrder] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/get-customers-order',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result);
          // console.log("data from cusotmer side ===",data)
          if (data?.status === true) {
            setOrder(data?.data);
          }
        })
        .catch(error => console.log('error', error));
    }, []),
  );
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Theme.colors.primaryColor}
      />
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          Home
        </Text>

        <Pressable
          onPress={() => navigation.navigate('patientnotification')}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -6,
              borderRadius: 10,
              right: -6,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              2
            </Text>
          </View>
          <Image
            source={require('../../../assets/bell.png')}
            resizeMode="contain"
            style={{height: 25, width: 25, borderRadius: 25}}
          />
        </Pressable>
      </View>
      <FlatList
        data={Orders}
        renderItem={data => {
          console.log("response from data ==", data?.item);
          return (
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                elevation: 2,
                backgroundColor: 'white',
                paddingVertical: 15,
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 5,
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Business Name:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                    {data?.item?.customer?.poc_name}
                </Text>
              </Text>

              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                POC Name:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                 {data?.item?.customer?.business_name}
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  Driver:{' '}
                  <Text
                    style={{
                      fontFamily: Theme.fontFamily.regular,
                      fontSize: 14,
                    }}>
                    {data?.item?.driver?.name}
                  </Text>
                </Text>
                {/* <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  Qty:{' '}
                  <Text
                    style={{
                      fontFamily: Theme.fontFamily.regular,
                      fontSize: 14,
                    }}>
                    1
                  </Text>
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  Active
                </Text> */}
              </View>

              <View
                style={{
                  height: 40,
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: '#F5F5F5',
                  marginTop: 15,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#2D2D2D',
                    fontFamily: Theme.fontFamily.semibold,
                    fontSize: 12,
                  }}>
                  Order Date & Time:
                </Text>
                <View
                  style={{
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="clockcircleo"
                    type="antdesign"
                    color={'#2D2D2D'}
                    size={16}
                  />
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 12,
                      marginLeft: 5,
                    }}>
                    {moment(data?.item?.manifest?.created_at).format('LT')}
                  </Text>
                </View>

                <View
                  style={{
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="calendar"
                    type="feather"
                    color={'#2D2D2D'}
                    size={16}
                  />
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 12,
                      marginLeft: 5,
                    }}>
                    {moment(data?.item?.manifest?.created_at).format('DD/MM/YY')}
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() =>
                  navigation.navigate('pdf', {data: data?.item?.manifest?.generator})
                }
                style={{
                  height: 40,
                  width: '100%',
                  borderRadius: 10,
                  backgroundColor: Theme.colors.primaryColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: Theme.fontFamily.medium,
                    fontSize: 15,
                  }}>
                  Check Manifest
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Customerhome;
