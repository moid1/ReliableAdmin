import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
const {height, width} = Dimensions.get('window');
import Input2 from '../../../components/input/textField';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import Loader from '../../../components/Loader';
import {useSelector} from 'react-redux';

const CreateDriver = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);

  const [showindicator, setShowindicator] = useState(false);

  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handledriver = () => {
    if (!name) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Name',
        autoClose: 1500,
      });
    } else if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Email',
        autoClose: 1500,
      });
    } else if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter New Password!',
        autoClose: 1500,
      });
    } else if (!confirmpassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Confirm Password!',
        autoClose: 1500,
      });
    } else if (password !== confirmpassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Both Password Should be Same!',
        autoClose: 1500,
      });
    } else {
      setShowindicator(true);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var formdata = new FormData();
      formdata.append('email', email);
      formdata.append('name', name);
      formdata.append('password', password);
      formdata.append('password_confirmation', confirmpassword);
      formdata.append('driver_license', license);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://manifest.reliabletiredisposal.online/api/register-driver',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          setShowindicator(false);
        //   console.log(result);

          const data = JSON.parse(result);
          if (data?.status === true) {
            navigation.goBack();
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data?.message,
              autoClose: 1500,
            });
          }
        })
        .catch(error => console.log('error', error));
    }
  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: Theme.colors.whiteColor,
      }}>
      {showindicator === true ? <Loader /> : null}

      <View
        style={{
          height: 70,
          width: '100%',
          paddingHorizontal: '2.5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
          }}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Theme.colors.textColor}
            size={28}
          />
        </Pressable>
        <Text
          style={{
            fontFamily: Theme.fontFamily.medium,
            fontSize: 19,
            color: Theme.colors.textColor,
          }}>
          Create Driver
        </Text>
        <Pressable
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}></Pressable>
      </View>
      <View style={{width: '95%', alignSelf: 'center', marginTop: 20}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <Input2
            placeholder={'Name'}
            value={name}
            onChangeText={txt => setName(txt)}
          />
          <Input2
            placeholder={'Email Address'}
            value={email}
            onChangeText={txt => setEmail(txt)}
          />
          <Input2
            placeholder={'License'}
            value={license}
            onChangeText={txt => setLicense(txt)}
          />
          <Input2
            placeholder={'Password'}
            value={password}
            onChangeText={txt => setPassword(txt)}
          />
          <Input2
            placeholder={'Confirm Password'}
            value={confirmpassword}
            onChangeText={txt => setConfirmPassword(txt)}
          />

          <Button title={'Submit'} onPress={() => handledriver()} />
        </ScrollView>
      </View>
    </View>
  );
};
export default CreateDriver;
