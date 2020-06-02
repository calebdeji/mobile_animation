import { StyleSheet } from "react-native";

const NavButtonStyle = StyleSheet.create({
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    subContainer: {
        backgroundColor: "#ffffff",
        width: 60,
        height: 60,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    rotatingContainer: {
        position: "absolute",
        width: "130%",
        height: "130%",
        display: "flex",
        justifyContent: "space-between",
        // transform: [{ rotate: "270deg" }],
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderColor: "#ffffff",
        borderWidth: 2,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderRadius: 100,
    },
    spanRotator: {
        borderStyle: "solid",
        position: "relative",
        borderWidth: 5,
        backgroundColor: "red",
        // width: 60,
        height: 5,

        borderColor: "red",
        borderRadius: 100,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        // transform: [{ rotate: "270deg" }],
    },
});
export default NavButtonStyle;
