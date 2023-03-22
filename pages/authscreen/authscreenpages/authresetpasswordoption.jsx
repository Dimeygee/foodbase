import { AuthHeader } from "../../../components/authcomponents/authheader"
import { View } from "react-native"
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper"
//import { useState } from "react"
import { styles } from "./authloginpage"
import { Button } from "../../../components/button"
import { useState } from "react"
import { AuthCustomRadio } from "../../../components/authcomponents/authcustomradio"

export default function AuthResetPasswordOption (){

    const [ checked , changeChecked ] = useState("Email")


    return(
        <AuthScreenWrapper>
            <View style={styles.AuthContainer}>
                <AuthHeader headertext={`Reset Your Password`} text={`At least 8 characters, with uppercase ${'\n'} & lowercase letters`} />
                <View style={{ marginTop:56, flex: 1}}>
                    <AuthCustomRadio 
                        name="Email" 
                        text1="Send to your Email  ✉️"
                        text2={`Password reset link has been sent ${'\n'}to your email address`}
                        checked={checked} 
                        select={changeChecked} />
                    <AuthCustomRadio 
                        name="Phone Number" 
                        text1="Send to your Phone number  📲"
                        text2={`Password reset link has been sent ${'\n'}to your phone number`}
                        checked={checked} 
                        select={changeChecked}
                        next 
                    />
                </View>
                <Button value={checked} state={true} name="Reset Password" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
        </AuthScreenWrapper>
    )

}