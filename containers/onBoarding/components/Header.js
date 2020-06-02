import React from "react";
import DotBox from "./DotBox";
import { View, TouchableOpacity, Text } from "react-native";

import { Icon } from "react-native-elements";
import HeaderStyle from "../styles/HeaderStyle";

const Header = () => {
    return (
        <>
            <DotBox length={71} style={{ right: 0, top: 30 }} />
            <View style={HeaderStyle.header}>
                <Icon name='bitcoin' type='font-awesome-5' size={46} color='#ffffff' />

                <TouchableOpacity>
                    <Text style={HeaderStyle.skipText}> Skip</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
export default Header;
