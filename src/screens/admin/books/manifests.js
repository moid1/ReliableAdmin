import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';

const Manifests = ({navigation, route}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  const data = route?.params?.customer;
  console.log('response from id ===', data);
  const [customer, setCustomer] = useState([]);
  const [customermanifest, setCustomermanifest] = useState([]);

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
        `https://portal.reliabletiredisposalhq.com/api/get-customer-manifest?customer_id=${data}`,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result);
          console.log(data);
          if (data?.status === true) {
            setCustomermanifest(data?.data);
          }
        })
        .catch(error => console.log('error', error));
    }, []),
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="arrowleft" type="antdesign" color={'black'} />
        </Pressable>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          Manifests
        </Text>
        <Pressable
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
              top: -8,
              borderRadius: 10,
              right: -5,
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
        data={customermanifest}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={data => {
          // console.log("single item ====", data?.item);
          return (
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                elevation: 2,
                backgroundColor: 'white',
                paddingVertical: 15,
                borderRadius: 15,
                marginTop: 15,
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  fontSize: 18,
                }}>
                Order No: {data?.item?.order_id}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '20%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Generator Manifest:
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('pdf', {data: data?.item?.generator})
                  }
                  style={{
                    height: 25,
                    width: 60,
                    borderRadius: 5,
                    backgroundColor: Theme.colors.primaryColor,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.colors.whiteColor,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    View
                  </Text>
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '20%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Transporter Manifest:
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('pdf', {data: data?.item?.transporter})
                  }
                  style={{
                    height: 25,
                    width: 60,
                    borderRadius: 5,
                    backgroundColor: Theme.colors.primaryColor,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.colors.whiteColor,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    View
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '20%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Processor Manifest:
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('pdf', {data: data?.item?.processor})
                  }
                  style={{
                    height: 25,
                    width: 60,
                    borderRadius: 5,
                    backgroundColor: Theme.colors.primaryColor,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.colors.whiteColor,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    View
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '20%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Disposal Manifest:
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('pdf', {data: data?.item?.disposal})
                  }
                  style={{
                    height: 25,
                    width: 60,
                    borderRadius: 5,
                    backgroundColor: Theme.colors.primaryColor,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.colors.whiteColor,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    View
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '20%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Original Manifest:
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('pdf', {
                      data: data?.item?.original_generator,
                    })
                  }
                  style={{
                    height: 25,
                    width: 60,
                    borderRadius: 5,
                    backgroundColor: Theme.colors.primaryColor,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.colors.whiteColor,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    View
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Manifests;
