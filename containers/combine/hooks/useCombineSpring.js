import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

const useCombineSpring = () => {
    const springValue = useRef(new Animated.Value(0.3)).current;
    const bouncingValue = useRef(new Animated.Value(-10)).current;
    useEffect(() => {
        spring();
        bounce();
    }, []);
    const spring = () => {
        Animated.spring(springValue, {
            toValue: 1,
            useNativeDriver: true,
            friction: 1,
        }).start();
    };
    const bounce = () => {
        Animated.loop(
            Animated.timing(bouncingValue, {
                toValue: 10,
                useNativeDriver: true,
                duration: 1000,
                easing: Easing.cubic,
            })
        ).start();
    };
    const handleNavigation = (navigate) => {
        navigate("Onboard");
    };
    return { springValue, bouncingValue, handleNavigation };
};
export default useCombineSpring;
