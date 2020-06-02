import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Icon } from "react-native-elements";
import NavButtonStyle from "../styles/NavButtonStyle";

const NavigationButton = ({ handleClick, animationValue }) => {
    return (
        <View style={NavButtonStyle.container}>
            <TouchableOpacity style={NavButtonStyle.subContainer} onPress={handleClick}>
                <Icon name='arrow-right' type='font-awesome-5' size={30} color='#1831B2' />
                <Animated.View
                    style={[
                        NavButtonStyle.rotatingContainer,
                        {
                            transform: [{ rotate: animationValue }],
                        },
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
};
export default NavigationButton;
