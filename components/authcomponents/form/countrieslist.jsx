import { Text , View, StyleSheet,ScrollView, TextInput, FlatList, TouchableOpacity} from "react-native"
import { SearchSvg } from "../../svgicons/svgicons"
import { useState, useEffect } from "react"
import themeStyle from "../../../styles/theme.style"
import { findFlag, getList } from "country-list-with-dial-code-and-flag"



export const CountriesList = ({setCountryFlag, setCountryDialcode  }) => {

    const [ countries,getCountries ] = useState([])
    const [ country, getCountry ] = useState({  })
    const [ searchedCountry,geSearchedCountry ] = useState([])


    useEffect(() => {
        getCountries(getList())
    },[])

    return(
        <View 
            style={styles.scrollcontainer} 
        >
            <View style={styles.searchcontainer}>
                <View style={styles.searchinnercontainer}>
                    <SearchSvg />
                    <TextInput  
                        style={styles.textinput}
                        placeholder='Search country'
                    />
                </View>
            </View>
            <Country 
                countries={countries}
                setCountryDialcode={setCountryDialcode}  
                setCountryFlag={setCountryFlag}  
            /> 
        </View>
    )

}


export const Country = ({ 
    countries , 
    searchedCountry,
    setCountryFlag, 
    setCountryDialcode}) => {

    const handlePress = (nativeEvent,item) => {
        const dialCode = item.dial_code.match(/\d/g).join("")
        setCountryDialcode(dialCode)
        setCountryFlag(item.flag)
    }

    return(
            <FlatList 
                data={searchedCountry ?? countries}
                keyExtractor={item => item.flag}
                ItemSeparatorComponent={() => (
                    <View style={{ 
                        borderWidth: 2,
                        borderColor:themeStyle.LIGHTGREY ,
                        marginHorizontal: 12
                    }}></View>
                )}
                renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={({ nativeEvent }) => 
                            handlePress(nativeEvent,item)}
                            style={styles.countrycontainer}>
                            <View 
                                style={[
                                    styles.flag_code,
                                    {
                                        alignItems: themeStyle.CENTER,
                                        justifyCenter: themeStyle.CENTER
                                    }
                                ]}><Text>{item.flag}</Text>
                            </View>
                            <View style={[styles.flag_code, {
                                    flex: 2, 
                                }]}>
                                    <Text 
                                        style={
                                            styles.count_text
                                        }>
                                            {item.dial_code}
                                    </Text>
                            </View>
                            <View style={[styles.name]}>
                                    <Text style={styles.count_text}>
                                        {item.name}
                                    </Text>
                            </View>
                        </TouchableOpacity>
                )}
            />
    )
}


const styles = StyleSheet.create({
    scrollcontainer: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: "-420%",
        zIndex: 100,
        backgroundColor: themeStyle.MAIN_WHITE,
        height: 300,
        borderWidth: 2,
        borderColor:themeStyle.LIGHTGREY
    },
    countrycontainer:{
        flex: 1,
        flexDirection: "row",
        alignItems:themeStyle.CENTER,
        paddingVertical:15,
        marginHorizontal: 12
    },
    searchcontainer: {
        marginHorizontal: 12
    },  
    searchinnercontainer:{
        borderColor: "transparent",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor:themeStyle.LIGHTGREY
    },
    textinput:{
        flex: 1,
        paddingLeft: 12,
        paddingVertical: 12
    },
    flag_code: {
        flex: 1,
    },
    name: {
        flex: 5,
       // paddingLeft:50
    },
    count_text: {
        color: themeStyle.GRAY,
        fontWeight: "500",
        fontFamily: themeStyle.Manrope_500Medium,
        fontSize: 16
    }
})