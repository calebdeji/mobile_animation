import { StyleSheet } from "react-native";

const onBoardTextStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",

        justifyContent: "center",
    },
    text: {
        color: "#ffffff",
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
    },
    textDescription: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        width: "80%",
    },
});
export default onBoardTextStyles;
