
import { Text, View, StyleSheet } from "react-native"
import { Button } from "../../button"
import { useRoute, useNavigationState , useNavigation} from "@react-navigation/native"
import { OnBoardingButton } from "../../button"



export default function OnBoarding({ SvgImage, article1, article2, marginTop,  handleScreenChange }){

    const route = useRoute()

    const RouteNames = useNavigationState(state => state.routeNames)
    const index = useNavigationState(state => state.index)

    const Navigation = useNavigation()


    const switchScreen = (index) => {
        const routename = RouteNames[index]
        if(index < RouteNames.length) Navigation.navigate(routename)
        if(index === RouteNames.length) {
            //do something 
        }
    }

    return(
        <View style={[styles.container, {
            paddingBottom: route.name === "onboardingthree" ? 90 : 42
        }]}>
            <View>{ SvgImage }</View>
            <View style={{
                marginTop,
                marginBottom: 48,
                width:287, 
            }}>
                <Text style={styles.article1}>{article1}</Text>
                <Text style={styles.article2}>{article2}</Text>
            </View>
            <View style={{ width: "100%" }}>
                <OnBoardingButton  index={index} switchScreen={switchScreen} name="Next" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold'  />
                {!(route.name === "onboardingthree") && <Button name="Skip"  paddingVertical={19} color="#FF7A28" fontFamily='Manrope_700Bold' />}
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 109,
        paddingHorizontal:24,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"space-between"
    },
    article1: {
        fontFamily: 'Manrope_700Bold',
        color:" #121826",
        fontSize: 24,
        textAlign:"center",
        lineHeight:34,
        fontWeight: "700"
    },
    article2: {
        fontFamily: 'Manrope_400Regular',
        fontSize:14,
        color:"#6C727F",
        textAlign:"center",
        lineHeight:24,
        marginTop:24,
    }
})

