import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper";
import { AuthHeader } from "../../../components/authcomponents/authheader";
import { useState } from "react";
import { styles } from "./authloginpage";
import { FormInput } from "../../../components/authcomponents/form/input";
import { Button } from "../../../components/button";
import { LockSvg } from "../../../components/authcomponents/authsvgs/authsvgs";


export default function  AuthResetPassword(){

    const [newpassword, setNewPassword] = useState("")
    const [confirmpassword, setConfirmPassowrd] = useState("")



    const isButtonDisabled = !(newpassword && confirmpassword) && true

    return(
        <AuthScreenWrapper>
            <View style={styles.AuthContainer}>
                <AuthHeader headertext={`Reset Your Password`} text={`At least 8 characters, with uppercase ${'\n'} & lowercase letters`} />
                <View style={{ marginTop:56, flex: 1}}>
                    <FormInput reset paddingLeft={4} secureTextEntry={true} value={newpassword} setValue={setNewPassword} placeholder="Enter your new password" icon={<LockSvg />} marginTop={28} name="New Password"  />
                    <FormInput reset paddingLeft={4} secureTextEntry={true} value={confirmpassword} setValue={setConfirmPassowrd} placeholder="Confirm your new password" icon={<LockSvg />} marginTop={28} name="Confirm Password"  />
                </View>
                <Button state={true} isButtonDisabled={isButtonDisabled} name="Update Password" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
        </AuthScreenWrapper>
    )
}