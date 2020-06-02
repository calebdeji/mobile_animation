import React from "react";
import { View, Animated, Button } from "react-native";
import useCombineSpring from "./hooks/useCombineSpring";
import combineStyle from "./styles/combineStyles";

const Combine = ({ navigation: { navigate } }) => {
    const { springValue, bouncingValue, handleNavigation } = useCombineSpring();
    return (
        <>
            <View style={[combineStyle.animateContainer]}>
                <Animated.Image
                    source={require("./assets/icon.png")}
                    style={[
                        combineStyle.imageStyle,
                        {
                            transform: [{ scale: springValue }],
                        },
                    ]}
                />
                <Animated.Image
                    source={require("./assets/icon.png")}
                    style={[
                        combineStyle.imageStyle,
                        combineStyle.imageWithMargin,
                        { transform: [{ translateY: bouncingValue }] },
                    ]}
                />
                <Button
                    title='Onboard'
                    color='red'
                    onPress={() => {
                        handleNavigation(navigate);
                    }}
                />
            </View>
        </>
    );
};
export default Combine;
