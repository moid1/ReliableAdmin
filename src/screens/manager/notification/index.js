import React from 'react';

import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Theme from '../../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@rneui/themed';
const DoctorNotification = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
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
        <Icon
          name="angle-left"
          type="font-awesome"
          color={'black'}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: 'black',
            fontFamily: Theme.fontFamily.semibold,
            fontSize: 18,
          }}>
          Notifications
        </Text>
        <Icon
          name="angle-left"
          type="font-awesome"
          color={'transparent'}
          size={30}
        />
      </View>

      <Text
          style={{
            color: 'black',
            fontFamily: Theme.fontFamily.semibold,
            fontSize: 18,marginLeft:"5%",marginTop:10
          }}>
        Today
        </Text>
        <View
          style={{
            height: 140,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../../../assets/dr.png')}
              style={{height: 50, width: 50}}
            />
            <View
              style={{
                height: 60,
                justifyContent: 'center',
                marginLeft: 10,
                width: '70%',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.semibold,
                  marginBottom: 3,
                }}>
                Dr. Amal Kaur
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                }}>
               New appointment
              </Text>
            </View>
            <Icon
              name="angle-double-right"
              type="font-awesome"
              color={'transparent'}
              size={26}
            />
          </View>
          <View
            style={{
              height: 40,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: '#F5F5F5',
              marginTop: 15,
              borderRadius: 30,
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
              Next Appointment:
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
                16/06/2023
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
                16/06/2023
              </Text>
            </View>
          </View>
      
        </View>
        <Text
          style={{
            color: 'black',
            fontFamily: Theme.fontFamily.semibold,
            fontSize: 18,marginLeft:"5%",marginTop:10
          }}>
     Yesterday
        </Text>
        <View
          style={{
            height: 140,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../../../assets/dr.png')}
              style={{height: 50, width: 50}}
            />
            <View
              style={{
                height: 60,
                justifyContent: 'center',
                marginLeft: 10,
                width: '70%',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.semibold,
                  marginBottom: 3,
                }}>
                Dr. Amal Kaur
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                }}>
               New appointment
              </Text>
            </View>
            <Icon
              name="angle-double-right"
              type="font-awesome"
              color={'transparent'}
              size={26}
            />
          </View>
          <View
            style={{
              height: 40,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: '#F5F5F5',
              marginTop: 15,
              borderRadius: 30,
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
              Next Appointment:
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
                16/06/2023
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
                16/06/2023
              </Text>
            </View>
          </View>
      
        </View>
        <View
          style={{
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../../../assets/dr.png')}
              style={{height: 50, width: 50}}
            />
            <View
              style={{
                height: 60,
                justifyContent: 'center',
                marginLeft: 10,
                width: '70%',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.semibold,
                  marginBottom: 3,
                }}>
                Dr. Amal Kaur
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                A new note was added. 
              </Text>
            </View>
            <Icon
              name="angle-double-right"
              type="font-awesome"
              color={'transparent'}
              size={26}
            />
          </View>
       
      
        </View>
    </View>
  );
};
export default DoctorNotification;
