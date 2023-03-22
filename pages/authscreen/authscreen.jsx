import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLoginPage from "./authscreenpages/authloginpage";
import AuthPhoneNumber from "./authscreenpages/authphonenumber";
import AuthVerity from "./authscreenpages/authverify";
import AuthResetPasswordOption from "./authscreenpages/authresetpasswordoption";
import AuthResetPassword from "./authscreenpages/authresetpassword";
import AuthSignUp from "./authscreenpages/authsignuppage";
import AuthAddress from "./authscreenpages/authaddress";



const { Screen, Navigator  }  = createNativeStackNavigator()

export default function AuthScreen(){

  return(
    <Navigator
      screenOptions={{
        headerShown: false
      }} 
    >
        <Screen name="authlogin" component={AuthLoginPage} />
    </Navigator>
  )
}

/*
<Screen name="authverify" component={AuthVerity} />
<Screen name="authloginscreen" component={AuthLoginPage} />
<Screen name="authphonenumber" component={AuthPhoneNumber} />
<Screen name="authresetpassword" component={AuthResetPasswordOption} />
 <Screen name="authresetpassword" component={AuthResetPassword} />
 <Screen name="authsignup" component={AuthSignUp} />
*/