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
const Ordercreation = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
const [order,setOrder]=useState([])
  useFocusEffect(
    React.useCallback(() => {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch('https://manifest.reliabletiredisposal.online/api/get-orders', requestOptions)
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          // console.log("response from orders =====",data?.data?.orders );
          if(data?.status === true){
            setOrder(data?.data?.orders);
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
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          Orders
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
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            width: '95%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            All Orders
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 120,
              backgroundColor: Theme.colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              borderRadius: 6,
            }}
            onPress={() => {
              navigation.navigate('order');
            }}>
            <Text style={{color: 'white', fontFamily: Theme.fontFamily.medium}}>
              Create Orders
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList data={order} renderItem={data =>{
          return(
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
              <Text style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
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
              <Text style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
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
                  fontSize: 12,
                }}>
                Created By:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                 {data?.item?.user?.name}
                </Text>
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 12,
                }}>
                POC Name:{' '}
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                    fontSize: 12,
                  }}>
                  {data?.item?.customer?.poc_name}
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
                  fontSize: 12,
                }}>
                Driver:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                 {data?.item?.driver?.name}
                </Text>
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 12,
                }}>
                Qty:{' '}
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                    fontSize: 12,
                  }}>
                  1
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
              <Text style={{fontFamily: Theme.fontFamily.regular, fontSize: 12}}>
                {/* Dec 07 2023 */}
{moment(data?.item?.created_at).format("MMM Do YY")}
              </Text>
            </Text>
          </View>
          )
        }}/>
   
      </ScrollView>
    </View>
  );
};
export default Ordercreation;
