import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    container: {
        // flex: 2,
        // flexGrow: ,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#02124E",
        height: 300,
        elevation: 10,
        paddingBottom: 100,
        marginBottom: 25,
        zIndex: 99,
    },
    subContainer: {
        position: "absolute",
        bottom: -25,
        left: "10%",
        right: "10%",
        width: "80%",
        backgroundColor: "#1831B2",
        elevation: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

        height: 100,
        alignItems: "center",
    },
    subContainerIconContainer: {
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: 15,
        borderRadius: 100000,
    },
});
export default commonStyles;
