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
} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ResetPassword = ({navigation, route}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  // console.log('user data ==', userData);
  const [showindicator, setShowindicator] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [oldpassword, setoldPassword] = useState('');
  const handleforget = () => {
    if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter New Password!',
        autoClose: 1500,
      });
    } else if (!oldpassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Old Password!',
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
      formdata.append('old_password', oldpassword);
      formdata.append('new_password', password);
      formdata.append('new_password_confirmation', confirmpassword);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/change-password',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          const data = JSON.parse(result);
          setShowindicator(false);
          if (data?.status === true) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            console.log('response from password reset ===', data);
            navigation.goBack();
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
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}

      <View style={styles.headerContainer}>
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
      </View>
      <View style={styles.bodytxtContainer}>
        <Text style={styles.txt1}>Create new password</Text>
        <Text style={styles.txt2}>
          Password must contain minimum 8 characters, at least 1 upper case, 1
          lower case, 1 number and 1 symbol.
        </Text>

        <View style={styles.inputContainer}>
          <Input
            label="Old Password"
            placeholder={'Old password'}
            value={oldpassword}
            onChangeText={val => setoldPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={130}
          />
          <Input
            label="New Password"
            placeholder={'New password'}
            value={password}
            onChangeText={val => setPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={130}
          />
          <Input
            label="Confirm Password"
            placeholder={'Confirm password'}
            value={confirmpassword}
            onChangeText={val => setConfirmPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={150}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Button title={'Reset'} onPress={() => handleforget()} />
        </View>
      </View>
    </View>
  );
};
export default ResetPassword;
