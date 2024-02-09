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
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
const DoctorAppointment = ({navigation}) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getRemainingDates = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Get the last day of the current month
    const remainingDays = lastDay.getDate() - today.getDate();

    const remainingDatesArray = [];
    for (let i = 0; i <= remainingDays; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      remainingDatesArray.push({
        date: nextDate.getDate(),
        day: daysOfWeek[nextDate.getDay()],
      });
    }

    return remainingDatesArray;
  };

  const getCurrentWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - dayOfWeek + 1); // Set the start date to the nearest Monday

    const weekArray = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      weekArray.push({
        date: currentDate.getDate(),
        day: daysOfWeek[currentDate.getDay()],
      });
    }

    return weekArray;
  };

  const [today, setToday] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [remainingDates, setRemainingDates] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    setToday(currentDate.getDate());
    setCurrentDay(daysOfWeek[currentDate.getDay()]);
    setCurrentWeek(getCurrentWeek());

    const remainingDatesArray = getRemainingDates();

    // Merge the days of the current week into the remaining days array
    const mergedDatesArray = remainingDatesArray.concat(currentWeek);

    // Remove objects with the same dates
    const uniqueMergedDatesArray = mergedDatesArray.reduce((acc, obj) => {
      const date = obj.date;
      if (!acc.some(item => item.date === date)) {
        acc.push(obj);
      }
      return acc;
    }, []);

    // Sort the array by date
    uniqueMergedDatesArray.sort((a, b) => a.date - b.date);

    setRemainingDates(uniqueMergedDatesArray);
  }, []);

  //   console.log('current day and days 1 ====', today);
  //   console.log('remaining day and days 1 ====', remainingDates);
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <Text
        style={{
          fontSize: 36,
          fontFamily: Theme.fontFamily.semibold,
          color: 'black',
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        My Orders
      </Text>
      <ScrollView
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}>
        <View style={{height: 120, width: '100%'}}>
          <FlatList
            data={remainingDates}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 20}}
            renderItem={item => {
              return (
                <View
                  style={{
                    height: 100,
                    width: 60,
                    backgroundColor:
                      item?.item?.date === today
                        ? Theme.colors.primaryColor
                        : 'white',
                    alignItems: 'center',
                    borderRadius: 30,
                    paddingVertical: 5,
                    marginLeft: 10,
                    marginTop: 15,
                  }}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: 'rgba(118, 118, 128, 0.5)',

                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 13,
                        fontFamily: Theme.fontFamily.medium,
                      }}>
                      {item?.item?.day}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: item?.item?.date === today ? 'white' : 'black',
                      fontSize: 15,
                      fontFamily: Theme.fontFamily.bold,
                      marginTop: 8,
                    }}>
                    {item?.item?.date}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            height: 160,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{height: '100%', width: '25%', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Theme.fontFamily.bold,
                color: 'black',
                marginTop: 10,
              }}>
              10:00 am
            </Text>
          </View>
          <Pressable 
            style={{
              height: 160,
              width: '70%',
              alignSelf: 'center',
              borderRadius: 15,
              elevation: 1,
              backgroundColor: 'white',

              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 160,
                width: '93%',
                alignSelf: 'center',
                marginRight: '2%',
              }}>
              <View
                style={{
                  height: 70,
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderBottomColor: '#2D2D2D',
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.medium,
                    color: 'grey',
                  }}>
                  Order Date
                </Text>
                <View
                  style={{
                    height: 40,
                    width: '100%',

                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="calendar"
                      type="antdesign"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Icon
                      name="clock"
                      type="feather"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 1,
                      borderColor: 'grey',
                      marginTop: 10,
                      marginLeft: 10,
                      borderRadius: 5,
                    }}></View>
                </View>
              </View>
              <View
                style={{
                  height: 65,
                  width: '90%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
            
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
                    T 7 Enterprises LLC
                  </Text>
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    Anetra Thomas
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            height: 160,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{height: '100%', width: '25%', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Theme.fontFamily.bold,
                color: 'black',
                marginTop: 10,
              }}>
              12:00 pm
            </Text>
          </View>
          <Pressable 
            style={{
              height: 160,
              width: '70%',
              alignSelf: 'center',
              borderRadius: 15,
              elevation: 1,
              backgroundColor: 'white',

              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 160,
                width: '93%',
                alignSelf: 'center',
                marginRight: '2%',
              }}>
              <View
                style={{
                  height: 70,
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderBottomColor: '#2D2D2D',
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.medium,
                    color: 'grey',
                  }}>
                  Order Date
                </Text>
                <View
                  style={{
                    height: 40,
                    width: '100%',

                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="calendar"
                      type="antdesign"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Icon
                      name="clock"
                      type="feather"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 1,
                      borderColor: 'grey',
                      marginTop: 10,
                      marginLeft: 10,
                      borderRadius: 5,
                    }}></View>
                </View>
              </View>
              <View
                style={{
                  height: 65,
                  width: '90%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
            
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
                    T 7 Enterprises LLC
                  </Text>
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    Anetra Thomas
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            height: 160,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{height: '100%', width: '25%', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Theme.fontFamily.bold,
                color: 'black',
                marginTop: 10,
              }}>
              2:00 pm
            </Text>
          </View>
          <Pressable 
            style={{
              height: 160,
              width: '70%',
              alignSelf: 'center',
              borderRadius: 15,
              elevation: 1,
              backgroundColor: 'white',

              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 160,
                width: '93%',
                alignSelf: 'center',
                marginRight: '2%',
              }}>
              <View
                style={{
                  height: 70,
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderBottomColor: '#2D2D2D',
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.medium,
                    color: 'grey',
                  }}>
                  Order Date
                </Text>
                <View
                  style={{
                    height: 40,
                    width: '100%',

                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="calendar"
                      type="antdesign"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Icon
                      name="clock"
                      type="feather"
                      color={'black'}
                      size={16}
                    />
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
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 1,
                      borderColor: 'grey',
                      marginTop: 10,
                      marginLeft: 10,
                      borderRadius: 5,
                    }}></View>
                </View>
              </View>
              <View
                style={{
                  height: 65,
                  width: '90%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
            
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
                    T 7 Enterprises LLC
                  </Text>
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                    }}>
                    Anetra Thomas
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          height: 45,
          width: 150,
          backgroundColor: 'white',
          elevation: 3,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 100,
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/filter.png')}
          style={{height: 30, width: 30}}
          resizeMode="contain"
        />
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: Theme.fontFamily.semibold,
            marginLeft: 10,
          }}>
          Filter
        </Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(118, 118, 128, 0.2)',
          }}>
          <View
            style={{
              backgroundColor: 'white',

              width: '100%',
              height: '55%',
              position: 'absolute',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              bottom: 0,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <View
              style={{
                height: 4,
                width: 60,
                backgroundColor: 'black',
                marginTop: 10,
                borderRadius: 3,
              }}></View>
            <View
              style={{
                height: 50,
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Filter
              </Text>
              <Icon
                name="closecircleo"
                type="antdesign"
                color={'black'}
                size={18}
                onPress={() => setModalVisible(false)}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginLeft: '5%',
                marginBottom: 5,
                width: '90%',
                marginTop: 20,
              }}>
              Date
            </Text>
            <View
              style={{
                height: 50,
                width: '90%',
                borderWidth: 1,
                borderColor: '#979797',
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <TextInput
                placeholder="Select date"
                placeholderTextColor={'#979797'}
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                  width: '80%',
                }}
              />
              <Icon
                name="calendar"
                type="antdesign"
                color={'black'}
                size={22}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginLeft: '5%',
                marginBottom: 5,
                width: '90%',
                marginTop: 10,
              }}>
              Status
            </Text>
            <View
              style={{
                height: 50,
                width: '90%',
                borderWidth: 1,
                borderColor: '#979797',
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <TextInput
                placeholder="Select"
                placeholderTextColor={'#979797'}
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                  width: '80%',
                }}
              />
              <Icon
                name="chevron-small-down"
                type="entypo"
                color={'black'}
                size={22}
              />
            </View>
            <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginLeft: '5%',
              marginBottom: 5,
              width: '90%',
              marginTop: 10,
            }}>
          Order By
          </Text>
          <View
            style={{
              height: 50,
              width: '90%',
              borderWidth: 1,
              borderColor: '#979797',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={'#979797'}
              style={{
                color: 'black',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                width: '80%',
              }}
            />
         
          </View>
          <View style={{width:"80%",marginTop:20}}>
        <Button title={'Filter'} onPress={()=> setModalVisible(false)}/>
       </View>
          </View>
     
        </Pressable>
      </Modal>
    </View>
  );
};
export default DoctorAppointment;
