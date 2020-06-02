import { StyleSheet } from "react-native";

const dotBoxStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 50,
        position: "absolute",
        zIndex: -99,
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 10,
        marginLeft: 2,
    },
});
export default dotBoxStyle;
