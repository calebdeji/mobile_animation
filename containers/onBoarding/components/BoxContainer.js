import React, { createContext } from "react";
import { View, Animated, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

import commonStyles from "../styles/BoxContainerStyle";
import DotBox from "./DotBox";
import useContainerAnimation, {
    AnimationRef,
    useUnmountContainerAnimation,
} from "../hooks/useContainerAnimation";
const { width } = Dimensions.get("window");

const firstBoxUpperDetails = [
    {
        id: 1,
        name: "camera",
        type: "font-awesome-5",
    },
    {
        id: 2,
        name: "edit",
        type: "AntDesign",
    },
    {
        id: 3,
        name: "drafting-compass",
        type: "font-awesome-5",
    },
];
const firstBoxLowerDetails = [
    {
        id: 1,
        name: "user",
        type: "font-awesome-5",
    },
    {
        id: 2,
        name: "user-friends",
        type: "font-awesome-5",
    },
    {
        id: 3,
        name: "user-astronaut",
        type: "font-awesome-5",
    },
];

const BoxContainer = ({ animationState, ...rest }) => {
    return (
        <View>
            <AnimationRef.Provider value={{ ...rest }}>
                {animationState === 1 && <FirstBoxContainer />}
                {animationState === 2 && <SecondBoxContainer />}
                {animationState === 3 && <ThirdBoxContainer />}
            </AnimationRef.Provider>
        </View>
    );
};

export const FirstBoxContainer = () => {
    const { boxContainerAnimationValue, subBoxContainerAnimationValue } = useContainerAnimation();
    const {
        boxContainerAnimationUnmount,
        subBoxContainerAnimationUnmount,
        unmount,
    } = useUnmountContainerAnimation();

    return (
        <Animated.View
            style={[
                commonStyles.container,
                {
                    transform: [
                        {
                            translateX: unmount
                                ? boxContainerAnimationUnmount
                                : boxContainerAnimationValue,
                        },
                    ],
                },
            ]}
        >
            {firstBoxUpperDetails.map(({ id, ...rest }) => {
                return (
                    <View key={id}>
                        <Icon {...rest} size={30} color='rgba(255,255,255,0.7)' />
                    </View>
                );
            })}

            <Animated.View
                style={[
                    commonStyles.subContainer,
                    {
                        transform: [
                            {
                                translateX: unmount
                                    ? subBoxContainerAnimationUnmount
                                    : subBoxContainerAnimationValue,
                            },
                        ],
                    },
                ]}
            >
                {firstBoxLowerDetails.map(({ id, ...rest }) => {
                    return (
                        <View style={commonStyles.subContainerIconContainer} key={id}>
                            <Icon {...rest} size={30} color='rgba(255,255,255,0.5)' />
                        </View>
                    );
                })}
            </Animated.View>
            <DotBox length={90} style={{ left: -30 }} />
        </Animated.View>
    );
};
export const SecondBoxContainer = () => {
    return (
        <>
            <FirstBoxContainer />
            {/* <Text>Hi</Text> */}
        </>
    );
};
export const ThirdBoxContainer = () => {
    return <FirstBoxContainer />;
};

export default BoxContainer;
