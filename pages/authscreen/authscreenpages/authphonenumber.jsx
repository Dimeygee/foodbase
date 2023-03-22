import { View } from "react-native"
import { AuthScreenWrapper } from "../../../components/authcomponents/authscreenwrapper"
import { styles } from "./authloginpage"
import { AuthHeader } from "../../../components/authcomponents/authheader"
import { FormInput } from "../../../components/authcomponents/form/input"
import { useState } from "react"
import { FlagSvg } from "../../../components/authcomponents/authsvgs/authsvgs"
import { Button } from "../../../components/button"

export default function AuthPhoneNumber (){

    const [ phoneNumber, setPhoneNumber ] = useState('')

    return(
        <AuthScreenWrapper>
            <View style={styles.AuthContainer}>
                <AuthHeader headertext={`Get Started ${'\n'} with Foodbase`} text="Enter your phone number to use Foodbase" />
                <View style={{ flex:1, marginTop:40}}>
                    <FormInput type="number" placeholder="Enter your phone number" value={phoneNumber} setValue={setPhoneNumber}  icon={<FlagSvg />} name="Phone Number" />
                </View>
                <Button value={phoneNumber} setValue={setPhoneNumber} state={true}  name="Send code" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
        </AuthScreenWrapper>
    )
}