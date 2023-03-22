import { View, StyleSheet, TextInput } from "react-native"
import { SettingSvg, SearchSvg } from "./svgicons/svgicons"
import themeStyle from "../styles/theme.style"




export const SearchBar = ({ placeholder, favourite }) => {

    return (
        <View style={styles.searchcontainer}> 
            <View style={styles.search}>
                <SearchSvg />
            </View>
            <TextInput 
                style={styles.textinput}
                placeholder={placeholder}
                placeholderTextColor={themeStyle.GRAY_2}
            />
            {!favourite && <View style={styles.iconRight}>
                <SettingSvg />
            </View>}
        </View>
    )

}


const styles = StyleSheet.create({
    textinput: {
        paddingVertical: 22,
        fontSize: themeStyle.FONT_14,
        lineHeight: themeStyle.LINEHEIGHT,
        fontFamily: themeStyle.Manrope_500Medium,
        flex: 1,
    },
    searchcontainer:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 24,
        borderColor:themeStyle.LIGHTGREY ,
        borderWidth: 1,
        flex:1
    },
    search: {
        paddingLeft: 21,
        paddingRight: 19,
        alignSelf:"stretch",
        justifyContent: "center"
    },
    iconRight: {
        paddingHorizontal: 23,
        alignSelf:"stretch",
        justifyContent: "center"
    },
})