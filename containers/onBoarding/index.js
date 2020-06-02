import React from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles/mainStyle";
import DotBox from "./components/DotBox";
import BoxContainer, { FirstBoxContainer } from "./components/BoxContainer";
import NavigationButton from "./components/NavigationButton";
import OnboardText from "./components/OnboardText";
import Header from "./components/Header";
import useOnboard from "./hooks/useOnboard";

const Onboarding = () => {
    const { handleAnimation, navButtonAnimation, ...rest } = useOnboard();
    return (
        <>
            <StatusBar backgroundColor='transparent' translucent={true} />
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                <BoxContainer {...rest} />
                <OnboardText />
                <NavigationButton
                    handleClick={handleAnimation}
                    animationValue={navButtonAnimation}
                />
            </ScrollView>
        </>
    );
};
export default Onboarding;
