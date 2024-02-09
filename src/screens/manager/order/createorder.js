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
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input2 from '../../../components/input/textField';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useFocusEffect} from '@react-navigation/native';

const conditionData = [
  {label: 'Box Truck Route', value: 'box_truck_route'},
  {label: 'Trailer Swap', value: 'trailer_swap'},
  {label: 'State', value: 'state'},
  {label: 'TDF', value: 'tdf'},
  {label: 'Steel', value: 'steel'},
];
const CreateOrder = ({navigation}) => {
  const userData = useSelector(state => state.auth?.userAccessKey);
  const [category, setCategory] = useState('box_truck_route');
  const [driverid, setdriverid] = useState('');
  const [cusotmerid, setcusotmerid] = useState('');
  const [drivername, setdrivername] = useState('');
  const [customername, setcustomername] = useState('');
  const [showindicator, setShowindicator] = useState(false);
  const [driverdata, setDriverData] = useState([]);
  const [notes, setnotes] = useState('');
  const [customer, setCustomer] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      GetAllCustomer();
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/get-all-drivers',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          // console.log('response from drivers ==', data);
          if (data?.status === true) {
            setDriverData(data?.data);
          }
        })
        .catch(error => console.log('error', error));
    }, []),
  );

  const GetAllCustomer = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userData?.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://portal.reliabletiredisposalhq.com/api/get-customers',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        // console.log(result)
        const data = JSON.parse(result);
        if (data?.status === true) {
          // console.log('all data ==', data?.data);

          setCustomer(data?.data);
        }
      })
      .catch(error => console.log('error', error));
  };
  const createOrder = () => {
    setShowindicator(true);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userData?.token}`);

    var formdata = new FormData();
    formdata.append('customer_id', cusotmerid);
    formdata.append('notes', notes);
    formdata.append('load_type', category);
    formdata.append('driver_id', driverid);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://portal.reliabletiredisposalhq.com/api/order', requestOptions)
      .then(response => response.text())
      .then(result => {
        setShowindicator(false);

        // console.log(result)
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
  };
  const renderItem = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 1,
            fontSize: 14,
            color: 'black',
            textTransform: 'capitalize',
            fontFamily: Theme.fontFamily.medium,
          }}>
          {item.label}
        </Text>
      </View>
    );
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
          Create Order
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Dropdown
            style={{
              marginBottom: 10,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 10,
              borderColor: Theme.colors.grey,
              padding: 10,
              borderWidth: 1,
            }}
            // searchField={true}
            search
            searchPlaceholder="Search..."
            placeholderStyle={{
              fontSize: 14,
              color: 'grey',
              fontFamily: Theme.fontFamily.medium,
            }}
            selectedTextStyle={{
              fontSize: 14,
              color: 'black',
              fontFamily: Theme.fontFamily.medium,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={customer?.map(k => {
              return {
                label: k?.business_name,
                value: k?.id,
              };
            })}
            labelField="label"
            valueField="value"
            placeholder="Select Customer"
            value={customername}
            onChange={item => {
              console.log("response from chage ==", item);
              setcustomername(item?.label);
              setcusotmerid(item.value?.toString());
            }}
            renderItem={renderItem}
          />

          <Dropdown
            style={{
              marginBottom: 10,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 10,
              borderColor: Theme.colors.grey,
              padding: 10,
              borderWidth: 1,
            }}
            placeholderStyle={{
              fontSize: 14,
              color: 'grey',
              fontFamily: Theme.fontFamily.medium,
            }}
            selectedTextStyle={{
              fontSize: 14,
              color: 'black',
              fontFamily: Theme.fontFamily.medium,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={conditionData}
            labelField="label"
            valueField="value"
            placeholder="Box Truck Route"
            value={category}
            onChange={item => {
              setCategory(item.value);
            }}
            renderItem={renderItem}
          />
          <Input2
            placeholder={'Note'}
            value={notes}
            onChangeText={txt => setnotes(txt)}
          />
          <Dropdown
            style={{
              marginBottom: 10,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 10,
              borderColor: Theme.colors.grey,
              padding: 10,
              borderWidth: 1,
            }}
            // searchField={true}
            search
            searchPlaceholder="Search..."
            placeholderStyle={{
              fontSize: 14,
              color: 'grey',
              fontFamily: Theme.fontFamily.medium,
            }}
            selectedTextStyle={{
              fontSize: 14,
              color: 'black',
              fontFamily: Theme.fontFamily.medium,
            }}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            data={driverdata?.map(k => {
              return {
                label: k?.name,
                value: k?.id,
              };
            })}
            labelField="label"
            valueField="value"
            placeholder="Select driver"
            value={drivername}
            onChange={item => {
              setdrivername(item?.label);
              setdriverid(item.value.toString());
            }}
            renderItem={renderItem}
          />

          <Button title={'Submit'} onPress={() => createOrder()} />
        </ScrollView>
      </View>
    </View>
  );
};
export default CreateOrder;
