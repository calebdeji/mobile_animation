import { useEffect, useState } from "react";

import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const navPersistenceKey = "navigation";

const useApp = () => {
    const [isReady, setisReady] = useState(false);
    const [initialState, setinitialState] = useState();
    useEffect(() => {
        const restoreState = async () => {
            const initialURL = await Linking.getInitialURL();
            try {
                if (Platform.OS !== "web" && initialURL === null) {
                    const savedStateString = await AsyncStorage.getItem(navPersistenceKey);
                    const state = savedStateString ? JSON.parse(savedStateString) : undefined;

                    if (state !== undefined) {
                        setinitialState(state);
                    }
                }
            } finally {
                setisReady(true);
            }
        };
        if (!isReady) {
            restoreState();
        }
    }, [isReady]);

    const saveState = async (state) => {
        await AsyncStorage.setItem(navPersistenceKey, JSON.stringify(state));
    };

    return { initialState, isReady, saveState };
};

export default useApp;
