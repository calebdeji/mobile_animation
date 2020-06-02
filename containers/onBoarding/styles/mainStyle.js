import { StyleSheet, StatusBar } from "react-native";

const mainStyle = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: StatusBar.currentHeight + 50,
        flexGrow: 1,
        backgroundColor: "#1831B2",
        display: "flex",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        // alignItems: "center",
        flex: 0.1,
    },
    skipText: {
        color: "#ffffff",
        fontSize: 16,
    },
});

export default mainStyle;
