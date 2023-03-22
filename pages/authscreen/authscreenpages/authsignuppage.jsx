
import { styles } from "./authloginpage"
import { AuthHeader } from "../../../components/authcomponents/authheader"
import { Button } from "../../../components/button"
import { FormInput , FormPhoneInput} from "../../../components/authcomponents/form/input"
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper"
import { View , Text , TextInput} from "react-native"
import { FlagSvg, LockSvg, EmailSvg, GoogleSvg, FaceBookSvg  } from "../../../components/authcomponents/authsvgs/authsvgs"
import { useState } from "react"
import themeStyle from "../../../styles/theme.style"
import { AuthButton } from "../../../components/button"



export default function AuthSignUp() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState('')

    const isButtonDisabled = !(email && password && phoneNumber) && true

    return (
        <AuthScreenWrapper>
            <View style={[styles.AuthContainer, {position:"relative"}]}>
                <AuthHeader headertext={`Get Started ${'\n'} with Foodbase`} text="Enter your phone number to use Foodbase" />
                <View style={{ marginTop: 36, marginBottom: 24, position:"relative" }}>
                    <FormInput placeholder="Enter your email address" value={email} setValue={setEmail}  icon={<EmailSvg />} name="Email Address" />
                    <FormPhoneInput placeholder="Enter your phone number" value={phoneNumber} setValue={setPhoneNumber}  icon={<FlagSvg />} name="Phone Number" marginTop={28} />
                    <FormInput  paddingLeft={4} secureTextEntry={true} value={password} setValue={setPassword} placeholder="Enter your password" icon={<LockSvg />} marginTop={28} name="Password"  />
                </View>
                <Button state={true} isButtonDisabled={isButtonDisabled} name="Sign up" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
                <Text 
                    style={{ 
                        color: themeStyle.GRAY_2, 
                        fontSize: themeStyle.FONT_14, 
                        marginTop: 16, 
                        textAlign: "center",
                        lineHeight: 24
                    }}>
                        Or continue with social account
                </Text>
                <View style={{ 
                    flexDirection: "row", 
                    justifyContent: "space-between" ,
                    marginTop:16,
                    marginBottom: 24,
                    
                }}>
                    <AuthButton social={<GoogleSvg />} text="Google" width={170}  />
                    <AuthButton social={<FaceBookSvg />} text="Facebook"  width={170}   />
                </View>
                <Text style={{ textAlign: 'center', color: themeStyle.GRAY, fontSize: themeStyle.FONT_14, fontFamily: themeStyle.MANROPE_REGULAR }}>Already have an account? <Text style={{ color: themeStyle.MAIN_COLOR_1, fontSize: themeStyle.FONT_14 ,  fontFamily: themeStyle.MANROPE_REGULAR }}>Sign in</Text></Text>
            </View>
        </AuthScreenWrapper>
    )
}

