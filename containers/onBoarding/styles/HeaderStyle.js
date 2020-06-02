import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flex: 0.1,
    },
    skipText: {
        color: "#ffffff",
        fontSize: 16,
    },
});
export default HeaderStyle;
