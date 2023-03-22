import { AuthHeader } from "../../../components/authcomponents/authheader";
import { View, Text, StyleSheet } from "react-native";
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper";
import { FormInput } from "../../../components/authcomponents/form/input";
import { EmailSvg, LockSvg, GoogleSvg, FaceBookSvg } from "../../../components/authcomponents/authsvgs/authsvgs";
import { AuthButton, Button } from "../../../components/button";
import themeStyle from "../../../styles/theme.style";
import { HideKeyboard } from "../../../components/hidekeyboard";
import { useEffect, useState } from "react";
import * as Google from 'expo-auth-session/providers/google';


export default function AuthLoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isHidden, showPassword] = useState(true)

    const isButtonDisabled = !(email && password) && true



    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '64753637394-mebdv6fqrni24095mmg0ud2kqhq8l2ng.apps.googleusercontent.com',
        //iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        expoClientId: "64753637394-mebdv6fqrni24095mmg0ud2kqhq8l2ng.apps.googleusercontent.com"
      });

    console.log(response)

    /*
    const handlePress = () => {
        fetch("http://192.168.43.149:8000/user_auth/api/token/",{
            method: "POST", 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    /*
    useEffect(() => {
        const validate = () => {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
            console.log("Email is Not Correct");
            //this.setState({ email: text })
            return false;
            }
            else {
            //this.setState({ email: text })
            console.log("Email is Correct");
            }
        }

        validate()
    },[email])*/

    

    return(
            <AuthScreenWrapper>
                    <View style={styles.AuthContainer}>
                        <AuthHeader headertext={`Welcome Back ${'\n'} to Foodbase`} text="Hello there, sign in to continue!" />
                        <View style={{ marginTop: 36, marginBottom: 24 }}>
                            <FormInput placeholder="Enter your email address" value={email} setValue={setEmail}  icon={<EmailSvg />} name="Email Address" />
                            <FormInput password paddingLeft={4} secureTextEntry={isHidden} isHidden={isHidden} showPassword={showPassword} value={password} setValue={setPassword} placeholder="Enter your password" icon={<LockSvg />} marginTop={28} name="Password"  />
                        </View>
                        <Button state={true} /*handlePress={handlePress}*/ isButtonDisabled={isButtonDisabled} name="Login" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
                        <Text style={{ 
                            color: themeStyle.GRAY_2, 
                            fontSize: themeStyle.FONT_14, 
                            marginTop: 24, 
                            marginBottom: 43 ,
                            textAlign: "center"
                            }}>
                                Or continue with social account
                        </Text>
                        <AuthButton request={request} promptAsync={promptAsync} social={<GoogleSvg />} text="Sign In with Google" width="100%" />
                        <AuthButton social={<FaceBookSvg />} text="Sign In with Facebook" marginTop={16} marginBottom={24} width="100%"  />
                        <Text style={{ textAlign: 'center', color: themeStyle.GRAY, fontSize: themeStyle.FONT_14, fontFamily: themeStyle.MANROPE_REGULAR }}>Dont’s have an account? <Text style={{ color: themeStyle.MAIN_COLOR_1, fontSize: themeStyle.FONT_14 ,  fontFamily: themeStyle.MANROPE_REGULAR }}>Sign up</Text></Text>
                    </View>
            </AuthScreenWrapper>
    )

}


export const styles = StyleSheet.create({
    AuthContainer: {
        paddingTop: 69, 
        paddingBottom: 40,  
        flex: 1,
    }
})