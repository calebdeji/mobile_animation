import { useRef, useEffect } from "react";
import { Animated, Dimensions } from "react-native";

const useBeginnerAnimation = () => {
    const { width, height } = Dimensions.get("window");
    const animateDown = useRef(new Animated.Value(-height)).current;
    const animateRight = useRef(new Animated.Value(-width)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(animateDown, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(animateRight, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);
    const handleNavigation = (navigate) => {
        navigate("Combine");
    };
    return { animateDown, animateRight, handleNavigation };
};

export default useBeginnerAnimation;
