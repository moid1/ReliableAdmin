import SplashScreen from '../screens/static/splash';
import Signin from '../screens/auth/signin';
import ResetPassword from '../screens/auth/reset';
import ForgetPassword from '../screens/auth/forgetpassword';
import Register from '../screens/auth/register';
import Verification from '../screens/auth/verfication';
import OnBoarding from '../screens/static/onBoarding';
import Home from '../screens/main/home';
import ChooseType from '../screens/static/Choose/Index';
import PatientHome from '../screens/customer/home';
import Patientsetting from '../screens/customer/setting';
import PatientAppointments from '../screens/customer/orders';
import BottomTab from './BottomTab';
import MyProfile from '../screens/customer/myProfile';
import PatientNotification from '../screens/customer/notification';
import DoctorAppointment from '../screens/manager/appointment';
import PatientDetail from '../screens/manager/appointment/patientprofile';
import Doctorsetting from '../screens/manager/setting';
import DoctorNotification from '../screens/manager/notification';
import DoctorProfile from '../screens/manager/profile';
import PatientRecord from '../screens/manager/patientRecord';
import RefferedDrPatient from '../screens/manager/patientRecord/PerferredPatient';
import ManagerSignin from '../screens/auth/managersignin';
import ManagerHome from '../screens/manager/home';
import Drawer from './CustomDrawer';
import CreateCustomer from '../screens/manager/customer/createnew';
import CreateOrder from '../screens/manager/order/createorder';
import ManagerReport from '../screens/manager/report';
import AdminLogin from '../screens/auth/adminlogin';
import AdminDrawer from './AdminDrawer';
import Manifests from '../screens/admin/books/manifests';
import Createmanager from '../screens/admin/manager/CreateManager';
import CreateDriver from '../screens/admin/driver/createdriver';
import PDFViewer from '../screens/admin/books/Pdf';
export const stackNavigationList = [







  {name: 'splash', component: SplashScreen},
  {name: 'signin', component: Signin},
  {name: 'reset', component: ResetPassword},
  {name: 'managersignin', component: ManagerSignin},

  {name: 'forget', component: ForgetPassword},
  {name: 'register', component: Register},
  {name: 'verification', component: Verification},
  {name: 'onboarding', component: OnBoarding},
  {name: 'home', component: Home},
  {name: 'chooseType', component: ChooseType},
  {name: 'patienthome', component: BottomTab},
  {name: 'patientappointments', component: PatientAppointments},
  {name: 'patientsetting', component: Patientsetting},

  {name: 'myprofile', component: MyProfile},
  {name: 'patientnotification', component: PatientNotification},




  // doctor screens
  {name: 'doctorappointment', component: DoctorAppointment},
  {name: 'patientprofile', component: PatientDetail},
  {name: 'doctorsetting', component: Doctorsetting},
  {name: 'doctornotification', component: DoctorNotification},
  {name: 'doctorprofile', component: DoctorProfile},
  {name: 'patientrecord', component: PatientRecord},
  {name: 'reffereddrpatient', component: RefferedDrPatient},
  {name: 'createnew', component: CreateCustomer},
  {name: 'order', component:CreateOrder},
  {name: 'report', component:ManagerReport},
  {name: 'doctorhome', component: Drawer},



  // admin

  {name: 'adminlogin', component: AdminLogin},
  {name: 'adminhome', component: AdminDrawer},
  {name: 'manifest', component: Manifests},
  {name: 'createmanager', component: Createmanager},
  {name: 'createdriver', component: CreateDriver},
  {name: 'pdf', component: PDFViewer},

];
