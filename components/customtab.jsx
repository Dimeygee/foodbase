import { TouchableOpacity, Text, StyleSheet } from "react-native"
import themeStyle from "../styles/theme.style"
import { TabCartSvg, ProfileSvg, HomeSvg, TabLoveSvg, BoxSvg } from "./svgicons/svgicons"
import { IconContainer } from "./iconcontainer"



export const CustomTab = ({state, navigation}) => {

    const isFocused = (routeIndex) => state.index === routeIndex
    

    const handlePress = (e, route) => {
        if(state.index !== route){
            navigation.navigate(state.routeNames[route])
        }
    }

    return(
        <TouchableOpacity style={styles.customtab}>
            <TouchableOpacity onPress={e => handlePress(e,0)}>
                <IconContainer>
                    <HomeSvg color={isFocused(0) ? "#FF7A28" : "#D3D5DA"} />
                </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={e => handlePress(e,1)}>
                <IconContainer>
                    <TabLoveSvg color={isFocused(1) ? "#FF7A28" : "#D3D5DA"}  />
                </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity>
                <BoxSvg />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => handlePress(e,2)}>
                <IconContainer>
                    <TabCartSvg color={isFocused(2) ? "#FF7A28" : "#D3D5DA"} />
                </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={e => handlePress(e,3)}>
                <IconContainer>
                    <ProfileSvg color={isFocused(3) ? "#FF7A28" : "#D3D5DA"}/>
                </IconContainer>
            </TouchableOpacity>
        </TouchableOpacity>
    )

} 



/*
const routes = [
    { name: "home" },
    { name : "liked" },
    { name: "cart" },
    { name: "profile" },
]*/

const styles = StyleSheet.create({
    customtab:{
        paddingHorizontal: 20,
        flexDirection: themeStyle.ROW,
        justifyContent:"space-between",
        backgroundColor: themeStyle.MAIN_WHITE
    },
})