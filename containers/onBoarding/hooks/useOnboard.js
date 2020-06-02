import { useRef, useState } from "react";
import { Animated, Easing, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const useOnboard = () => {
    const boxContainerAnimation = useRef(new Animated.Value(0)).current;
    const subBoxContainerAnimation = useRef(new Animated.Value(0)).current;
    const navButtonAnimation = useRef(new Animated.Value(0)).current;
    const [animationState, setanimationState] = useState(1);
    const [unmount, setunmount] = useState(false);
    const handleAnimation = () => {
        switch (animationState) {
            case 1:
                handleContainerAnimation();
                break;
            case 2:
                handleContainerAnimation();
                break;
            case 3:
                handleThirdAnimation();
                break;
            default:
                break;
        }
    };
    const handleContainerAnimation = () => {
        setunmount(true);
        Animated.parallel([
            Animated.timing(boxContainerAnimation, {
                toValue: -width,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(subBoxContainerAnimation, {
                toValue: -width,
                duration: 200,
                useNativeDriver: true,
                delay: 100,
            }),
        ]).start(() => {
            console.log("Animation done");
            setunmount(false);

            setanimationState((prevState) => prevState + 1);
        });
        Animated.timing(navButtonAnimation, {
            toValue: animationState,
            easing: Easing.ease,
            useNativeDriver: true,
            duration: 200,
        }).start();
    };
    const handleThirdAnimation = () => {};
    navButtonAnimation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ["0deg", "360deg", "0deg"],
    });
    return {
        handleAnimation,
        boxContainerAnimation,
        subBoxContainerAnimation,
        navButtonAnimation,
        animationState,
        unmount,
    };
};
export default useOnboard;
