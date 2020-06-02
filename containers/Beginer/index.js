import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Easing,
    Animated,
    StatusBar,
    Button,
} from "react-native";
import style from "./styles/mainStyle";
import useBeginnerAnimation from "./hooks/useAnimation";

const Beginner = ({ navigation: { navigate } }) => {
    const { animateDown, animateRight, handleNavigation } = useBeginnerAnimation();
    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View>
                    <Animated.View
                        style={[style.animateView, { transform: [{ translateY: animateDown }] }]}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 28,
                                textAlign: "center",
                                margin: 10,
                            }}
                        >
                            {" "}
                            Welcome
                        </Text>
                    </Animated.View>
                    <Animated.View
                        style={[
                            style.animateView,
                            style.radialBox,
                            { transform: [{ translateX: animateRight }] },
                        ]}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 16,
                                textAlign: "center",
                                margin: 10,
                            }}
                        >
                            {" "}
                            Caleb{" "}
                        </Text>
                    </Animated.View>
                </View>
                <Button
                    title='Continue'
                    onPress={() => {
                        handleNavigation(navigate);
                    }}
                    accessibilityLabel='navigate'
                />
            </ScrollView>
        </>
    );
};

export default Beginner;
