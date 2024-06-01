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
import moment from 'moment';
import {Icon} from '@rneui/themed';
const CompareOrders = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  const [order, setOrder] = useState([]);
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
        'https://manifest.reliabletiredisposal.online/api/get-fulfill-orders',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          console.log('response from compared orders =====', data);
          if (data?.status === true) {
            setOrder(data?.orders);
          }
        })
        .catch(error => console.log('error', error));
    }, [userData?.token]),
  );

  //   useFocusEffect(
  //     React.useCallback(()=>{
  //         var myHeaders = new Headers();
  //         myHeaders.append('Authorization', `Bearer ${userData?.token}`);

  //         var requestOptions = {
  //           method: 'GET',
  //           headers: myHeaders,
  //           redirect: 'follow'
  //         };

  //         fetch("https://manifest.reliabletiredisposal.online/api/get-fulfill-orders", requestOptions)
  //           .then(response => response.text())
  //           .then(result => {
  //             const data = JSON.parse(result);
  //             console.log("response from fulfill orders ====",data)

  //         })
  //           .catch(error => console.log('error', error));
  //     },[])
  //   )
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
            navigation.openDrawer();
          }}
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 20,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: 'black',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: 2,
              width: 15,
              backgroundColor: 'black',
              marginTop: 4,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: 2,
              width: 10,
              backgroundColor: 'black',
              marginTop: 4,
              borderRadius: 10,
            }}></View>
        </Pressable>
        <Text
          style={{
            fontSize: 17,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          All Compared Orders
        </Text>
        <Pressable
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: 'white',

            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}></Pressable>
      </View>

      <FlatList
        data={order}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        renderItem={data => {
          //   console.log('response from sinlgle', data?.item);
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
                }}>
                Business Name:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                  {data?.item?.customer?.business_name}
                </Text>
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                Email:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                  {data?.item?.customer?.email}
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
                  Created By:{' '}
                  <Text
                    style={{
                      fontFamily: Theme.fontFamily.regular,
                      fontSize: 12,
                    }}>
                    {data?.item?.user?.name}
                  </Text>
                </Text>
              </View>
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
                  Load Type:{' '}
                  <Text
                    style={{
                      fontFamily: Theme.fontFamily.regular,
                      fontSize: 14,
                    }}>
                    {data?.item?.load_type}
                  </Text>
                </Text>
              </View>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                Order Date:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                  {moment(data?.item?.created_at).format('MMM Do YY')}
                </Text>
              </Text>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: Theme.colors.primaryColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.semibold,
                  }}>
                  Count Sheet
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default CompareOrders;
