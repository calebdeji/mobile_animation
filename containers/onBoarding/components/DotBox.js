import React from "react";
import { View } from "react-native";
import getArrayForDotBox from "../helpers/getArrayForDotBox";
import dotBoxStyle from "../styles/dotBoxStyle";
const DotBox = ({ length, style }) => {
    return (
        <View style={{ ...dotBoxStyle.container, ...style }}>
            {getArrayForDotBox(length).map((element) => {
                return <View style={dotBoxStyle.dot} key={element} />;
            })}
        </View>
    );
};
export default DotBox;
