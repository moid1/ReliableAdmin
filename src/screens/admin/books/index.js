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

const AdminBooks = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  const [customer, setCustomer] = useState([]);
  const [customerNotes, setCustomernotes] = useState([]);

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
        'https://portal.reliabletiredisposalhq.com/api/get-orders',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          if (data?.status === true) {
            // console.log('all data ==', data?.data);

            setCustomer(data?.data?.orders);
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
          Books
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
        data={customer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={data => {
          console.log("single item ====", data?.item);
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
                  fontFamily: Theme.fontFamily.bold,
                  fontSize: 18,
                }}>
                {data?.item?.customer?.business_name}
              </Text>
              <Text
                style={{
                  color: Theme.colors.grey,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                {data?.item?.customer?.address}
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.medium,
                  marginTop: 10,
                }}>
                Click on the links below to find the manifest for this CX
              </Text>
              <Text
                onPress={() =>
                  navigation.navigate('manifest', {
                    customer: data?.item?.customer_id,
                  })
                }
                style={{
                  color: Theme.colors.primaryColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                Manifests
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default AdminBooks;
