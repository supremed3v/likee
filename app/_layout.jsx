import { useEffect } from "react";
import { useFonts } from 'expo-font';
import 'react-native-url-polyfill/auto'
import { SplashScreen, Stack } from "expo-router";

const RootLayout = () => {
    // const [loaded] = useFonts({
    //     'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    // });

    // useEffect(() => {
    //     if (!loaded) {
    //         return;
    //     }
    // }, [loaded]);
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout;