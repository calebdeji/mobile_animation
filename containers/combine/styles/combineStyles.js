import { StyleSheet } from "react-native";

const combineStyle = StyleSheet.create({
    animateContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
    },
    imageStyle: {
        width: 200,
        height: 100,
    },
    imageWithMargin: {
        marginTop: 20,
    },
});

export default combineStyle;
