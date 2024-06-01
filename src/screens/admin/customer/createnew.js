import React, {useState} from 'react';
import {View, Text, Dimensions, Pressable, ScrollView} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
const {height, width} = Dimensions.get('window');
import Input2 from '../../../components/input/textField';
import Loader from '../../../components/Loader';
import {useSelector} from 'react-redux';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const CreateCustomer = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);

  const [showindicator, setShowindicator] = useState(false);
  const [bussinessName, setBussinessName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pocName, setPocName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [mail, setMail] = useState('');
  const [tax, setTax] = useState('');
  const [secondmail, setSecondMail] = useState('');
  const [fee, setFee] = useState('');
  const [po, setPo] = useState('');
  const [price, setPrice] = useState('');

  const handleManager = () => {
    if (!bussinessName) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Bussiness Man!',
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
      formdata.append('business_name', bussinessName);
      formdata.append('email', email);
      formdata.append('address', address);
      formdata.append('phone_no', phone);
      formdata.append('poc_name', pocName);
      formdata.append('password', password);
      formdata.append('password_confirmation', confirmpassword);
      formdata.append('mail_address', mail);
      formdata.append('tax', tax);
      formdata.append('second_mail', secondmail);
      formdata.append('convenienceFee', fee);
      formdata.append('po', po);
      formdata.append('passenger_pricing', price);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://manifest.reliabletiredisposal.online/api/register-customer',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          setShowindicator(false);

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
      {showindicator === true ? <Loader /> : false}
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
          Create Customer
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
            placeholder={'Business Name'}
            value={bussinessName}
            onChangeText={txt => setBussinessName(txt)}
          />
          <Input2
            placeholder={'Address'}
            value={address}
            onChangeText={txt => setAddress(txt)}
          />
          <Input2
            placeholder={'Phone #'}
            value={phone}
            onChangeText={txt => setPhone(txt)}
          />
          <Input2
            placeholder={'POC Name'}
            value={pocName}
            onChangeText={txt => setPocName(txt)}
          />

          <Input2
            placeholder={'Passenger Pricing'}
            value={price}
            onChangeText={txt => setPrice(txt)}
          />
          <Input2
            placeholder={'Password'}
            value={password}
            onChangeText={txt => setPassword(txt)}
          />
          <Input2
            placeholder={'Confirm Password'}
            value={confirmpassword}
            onChangeText={txt => setconfirmPassword(txt)}
          />
          {/* <Input2 placeholder={'Other Pricing'} /> */}
          <Input2
            placeholder={'Tax'}
            value={tax}
            onChangeText={txt => setTax(txt)}
          />

          <Input2
            placeholder={'Email'}
            value={email}
            onChangeText={txt => setEmail(txt)}
          />
          {/* <Input2 placeholder={'2nd phone #'}  /> */}
          <Input2
            placeholder={'Mailing address'}
            value={mail}
            onChangeText={txt => setMail(txt)}
          />
          <Input2
            placeholder={'2nd Email'}
            value={secondmail}
            onChangeText={txt => setSecondMail(txt)}
          />
          <Input2 placeholder={'Charge Type'} />
          <Input2
            placeholder={'Convenience  Fee'}
            value={fee}
            onChangeText={txt => setFee(txt)}
          />
          <Input2
            placeholder={'PO #'}
            value={po}
            onChangeText={txt => setPo(txt)}
          />

          <Button title={'Submit'} onPress={()=> handleManager()} />
        </ScrollView>
      </View>
    </View>
  );
};
export default CreateCustomer;
