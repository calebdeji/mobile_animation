import { useRef, useEffect, createContext, useContext } from "react";
import { Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const AnimationRef = createContext();

const useContainerAnimation = () => {
    const boxContainerAnimationValue = useRef(new Animated.Value(width - 100)).current;
    const subBoxContainerAnimationValue = useRef(new Animated.Value(width - 100)).current;
    useEffect(() => {
        Animated.parallel([
            Animated.timing(boxContainerAnimationValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(subBoxContainerAnimationValue, {
                toValue: 0,
                duration: 200,
                delay: 0.5,
                useNativeDriver: true,
            }),
        ]).start();
    });
    return { boxContainerAnimationValue, subBoxContainerAnimationValue };
};
export const useUnmountContainerAnimation = () => {
    const { boxContainerAnimation, subBoxContainerAnimation, unmount } = useContext(AnimationRef);
    // console.log({ hello: useContext(AnimationRef) });
    return {
        boxContainerAnimationUnmount: boxContainerAnimation,
        subBoxContainerAnimationUnmount: subBoxContainerAnimation,
        unmount,
    };
};
export default useContainerAnimation;
