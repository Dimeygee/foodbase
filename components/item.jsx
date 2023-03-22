import { View , Text} from "react-native"
import themeStyle from "../styles/theme.style"


export const Item = ({ text, active  }) => {

    return(
        <View 
            style={[
                active ? {
                    backgroundColor: themeStyle.MAIN_COLOR_1,
                } : {
                    borderColor: themeStyle.LIGHTGREY,
                    borderWidth: 1,
                }, {
                    borderRadius: 24,
                    padding: 14,
                    lineHeight: themeStyle.LINEHEIGHT,
                    marginRight: 16,
                    marginTop: 16
                }
            ]}>
            <Text style={[ 
                active ? 
                { color: themeStyle.MAIN_WHITE } : 
                { color: themeStyle.GRAY } ,
                {fontFamily: "Roboto", 
                    fontSize: themeStyle.FONT_14, 
                    lineHeight: themeStyle.LINEHEIGHT
                }]}>{text}</Text>
        </View>
    )

} 