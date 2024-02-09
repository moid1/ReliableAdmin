import React from 'react';

import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Theme from '../../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
const MyProfile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          height: 40,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Icon2
          name="angle-left"
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />

        <Text
          style={{
            color: 'black',
            fontFamily: Theme.fontFamily.semibold,
            fontSize: 18,
          }}>
          My Profile
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View style={{width: '30%'}}>
            <Image
              source={require('../../../assets/profile.png')}
              style={{height: 80, width: 80, borderRadius: 12}}
            />
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                color: 'black',
                fontFamily: Theme.fontFamily.semibold,
                fontSize: 18,
              }}>
              John Doe
            </Text>
            <Text style={{color: Theme.colors.Text}}>Gender: Male</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <Text style={{color: Theme.colors.Text}}>Age: 33</Text>
              <Text style={{color: Theme.colors.Text}}>
                Patient ID: 3018001
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 160,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <LinearGradient
            colors={['#BA8899', '#F6CA83']}
            style={{
              height: 100,
              width: '32%',
              alignSelf: 'center',
              backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            start={{x: 1, y: 0.0}}
            end={{x: 1, y: 1}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 16,
                }}>
                Blood group
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 25,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                A+
              </Text>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#BA8899', '#F6CA83']}
            style={{
              height: 100,
              width: '32%',
              alignSelf: 'center',
              backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            start={{x: 1, y: 0.0}}
            end={{x: 1, y: 1}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 16,
                }}>
                Height
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 25,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                5'6''
              </Text>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#BA8899', '#F6CA83']}
            style={{
              height: 100,
              width: '32%',
              alignSelf: 'center',
              backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            start={{x: 1, y: 0.0}}
            end={{x: 1, y: 1}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 16,
                }}>
                Weight
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: Theme.colors.whiteColor,
                  fontSize: 25,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                162.3Ib
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View
          style={{
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: '#F5F5F5',
            marginTop: 10,
            elevation: 10,
            shadowColor: '#F5F5F5',
          }}>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              //   justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: Theme.colors.redColor,
                borderRadius: 12,
                width: 50,
                height: 50,
              }}>
              <Image
                source={require('../../../assets/heart.png')}
                style={{height: 30, width: 30}}
              />
            </View>
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
                  fontSize: 15,
                  fontFamily: Theme.fontFamily.semibold,
                  marginBottom: 3,
                }}>
                Medical Card
              </Text>

              <View
                style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                <Icon
                  name="clockcircleo"
                  type="antdesign"
                  color={'#2D2D2D'}
                  size={16}
                />
                <Text
                  style={{
                    color: '#2D2D2D',
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  Last updated: 08/05/2023
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#2D2D2D',
              fontSize: 16,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            Last diagnosis
          </Text>

          <Text
            onPress={() => navigation.navigate('diagnosisList')}
            style={{
              color: Theme.colors.blueColor,
              fontSize: 14,
              fontFamily: Theme.fontFamily.medium,
            }}>
            View all
          </Text>
        </View>

        <View
          style={{
            height: 180,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,

            marginTop: 10,
            padding: 12,
            backgroundColor: '#F5F5F5',
            elevation: 10,
            shadowColor: '#F5F5F5',
          }}>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.semibold,
                  marginBottom: 3,
                }}>
                Name of the disease
              </Text>

              <Text
                style={{
                  color: '#2D2D2D',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                Lorem ipsum dolor sit amet consectetur. Fringilla id at orci
                diam at amet. Aliquet nisi velit pharetra tellus risus vulputate
                et venenatis.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={{color: 'black'}}>Status:</Text>

              <View
                style={{
                  backgroundColor: Theme.colors.primaryColor,
                  borderRadius: 24,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                }}>
                <Text style={{color: Theme.colors.textColor}}>
                  On medication
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
              <Icon
                name="clockcircleo"
                type="antdesign"
                color={'#2D2D2D'}
                size={16}
              />
              <Text
                style={{
                  color: '#2D2D2D',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                08/05/2023
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: Theme.colors.lightGrey,
              borderRadius: 24,
              padding: 4,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Theme.colors.primaryColor,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 24,
              }}>
              <Text style={{color: 'black'}}>Primary Doctor</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 24,
              }}>
              <Text style={{color: Theme.colors.textColor}}>
                Referred Doctor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 200,
            width: '90%',
            alignSelf: 'center',
            // backgroundColor: 'red',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            onPress={() => navigation.navigate('primarydoctor')}
            style={{
              height: 180,
              width: '47.5%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 15,
              elevation: 3,
            }}>
            <Image
              style={{height: 60, width: 60}}
              source={require('../../../assets/dr.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
              }}>
              Dr. Amal Kaur
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Physician
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('referredoctor');
            }}
            style={{
              height: 180,
              width: '47.5%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 15,
              elevation: 3,
            }}>
            <Image
              style={{height: 60, width: 60}}
              source={require('../../../assets/dr.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
              }}>
              Dr. Amal Kaur
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Physician
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default MyProfile;
