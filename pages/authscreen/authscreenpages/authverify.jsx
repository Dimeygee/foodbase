import { useState } from "react"
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper"
import { AuthHeader } from "../../../components/authcomponents/authheader"
import { Button } from "../../../components/button"
import { View } from "react-native"
import { styles } from "./authloginpage"
import OtpForm from "../../../components/authcomponents/form/otpform"
import { OtpButton } from "../../../components/button"


export default function AuthVerity (){

    const [ otp , setOtp ] = useState('')

    const isButtonDisabled = !otp && true
    

    return(
        <AuthScreenWrapper>
            <View style={styles.AuthContainer}>
                <AuthHeader headertext={`Verify Phone Number`} text={`We have sent code to your number ${'\n'} (+84) 999 999 999`} />
                <View style={{ flex:1, marginTop:40,}}>
                    <OtpForm setOtp={setOtp} />
                </View>
                <OtpButton value={otp} setValue={setOtp} fontSize={16} name="Send code" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
                <Button isButtonDisabled={isButtonDisabled} state={true} name="Resend code"  color="#FF7A28" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
        </AuthScreenWrapper>
    )
}