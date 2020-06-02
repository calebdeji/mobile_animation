import React from "react";

import { View, Text } from "react-native";
import onBoardTextStyles from "../styles/onBoardTextStyle";

const OnboardText = () => {
    return (
        <View style={onBoardTextStyles.container}>
            <Text style={{ ...onBoardTextStyles.text, ...onBoardTextStyles.textHeader }}>
                {" "}
                Community{" "}
            </Text>
            <Text style={{ ...onBoardTextStyles.text, ...onBoardTextStyles.textDescription }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ullam, nam nostrum
                consectetur molestiae officia sapiente porro at distinctio maiores? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Nisi, ex?
            </Text>
        </View>
    );
};
export default OnboardText;
