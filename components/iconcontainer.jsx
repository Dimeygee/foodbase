import { StyleSheet, View } from "react-native"

export const IconContainer = ({children }) => {
    return (
        <View 
            style={styles.iconcontainer}
        >
        {children}
        </View>
    )
}

const styles = StyleSheet.create({
    iconcontainer : {
        paddingVertical: 40,
        paddingHorizontal: 18,
    }
})