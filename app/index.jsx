import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="bg-gray-800 h-full">
            <ScrollView>
                <View>
                    <Text>Welcome to Expo Router</Text>
                    <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100 }} />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#fff" style="light" />
        </SafeAreaView>
    )
}

export default Welcome;