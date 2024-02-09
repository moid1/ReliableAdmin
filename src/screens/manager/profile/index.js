import React, {useState} from 'react';

import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Theme from '../../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
const DoctorProfile = ({navigation}) => {
  const [active, setActive] = useState('my');
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
        <Text style={{color:"black",fontSize:14,fontFamily:Theme.fontFamily.medium}}>Edit</Text>
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
            gap: 12,
          }}>
          <View style={{width: '45%'}}>
            <Image
              source={require('../../../assets/dr.png')}
              style={{height: 170, width: '100%', borderRadius: 12}}
            />
          </View>
          <View style={{width: '65%'}}>
            <Text
              style={{
                color: 'black',
                fontFamily: Theme.fontFamily.semibold,
                fontSize: 18,
              }}>
              Dr. Amal Kaur
            </Text>
            <Text style={{color: Theme.colors.Text}}>Physician</Text>
            <Text style={{color: Theme.colors.Text}}>Gender Hospital</Text>

            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                gap: 12,
                marginTop: 12,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: Theme.colors.lightGrey,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/user.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
              <View>
                <Text style={{color: Theme.colors.Text}}>Patients</Text>
                <Text
                  style={{
                    color: Theme.colors.blueColor,
                    fontFamily: Theme.fontFamily.medium,
                    fontSize: 16,
                  }}>
                  300+
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                gap: 12,
                marginTop: 12,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: Theme.colors.lightGrey,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/exp.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
              <View>
                <Text style={{color: Theme.colors.Text}}>Experience</Text>
                <Text
                  style={{
                    color: Theme.colors.blueColor,
                    fontFamily: Theme.fontFamily.medium,
                    fontSize: 16,
                  }}>
                  4 years
                </Text>
              </View>
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
              onPress={() => setActive('my')}
              style={{
                backgroundColor:
                  active === 'my' ? Theme.colors.primaryColor : 'transparent',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 24,
              }}>
              <Text
                style={{
                  color: active === 'my' ? 'black' : 'grey',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                My Patient
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActive('referred')}
              style={{
                backgroundColor:
                  active === 'referred'
                    ? Theme.colors.primaryColor
                    : 'transparent',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 24,
              }}>
              <Text
                style={{
                  color: active === 'referred' ? 'black' : 'grey',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Referred Patient
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {active === 'my' ? (
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
              onPress={() => navigation.navigate('patientrecord')}
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
                source={require('../../../assets/usr.png')}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
               John Doe
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.medium,
                }}>
        Diagnosis: XYZ
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('patientrecord')}
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
                source={require('../../../assets/usr2.png')}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
              Mike Shinoda
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.medium,
                }}>
            Diagnosis: XYZ
              </Text>
            </Pressable>
          </View>
        ) : (
          <View
            style={{
              height: 220,
              width: '90%',
              alignSelf: 'center',
              // backgroundColor: 'red',
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Pressable
             onPress={() => navigation.navigate('reffereddrpatient')}
              style={{
                height: 200,
                width: '47.5%',
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 15,
                elevation: 3,paddingTop:20,
              }}>
              <Image
                style={{height: 60, width: 60}}
                source={require('../../../assets/usr3.png')}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
              Julia Hopkins
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.medium,
                }}>
            Diagnosis: XYZ
              </Text>
              <View style={{position:"absolute",width:"100%",alignItems:"center",bottom:10}}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.medium,
                }}>
          Referred by:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
           
                }}>
          Dr. Sasha Miles
              </Text>
              </View>
         
          
            </Pressable>
            <Pressable
              style={{
                height: 180,
                width: '47.5%',
                alignItems: 'center',
                justifyContent: 'center',
            
             
              }}>
           
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default DoctorProfile;
