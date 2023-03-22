
import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style"


export default StyleSheet.create({ 
    container: {
        flex:1 ,
        backgroundColor: theme.MAIN_COLOR_1,
        color: theme.MAIN_WHITE, 
        justifyContent: "center",
        alignItems:"center",
    },
    logo: {
        flexDirection:"row",
        alignItems:"center",
    },
    circle: {
        width:36,
        height:36,
        borderRadius:100,
        borderWidth:7,
        borderColor:"#fff",
        marginRight: 14
    },
    splashscreenBG:{
       marginTop:80,
       alignSelf:"flex-end",
    }
})