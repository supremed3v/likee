import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="bg-gray-800 h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%"
                }}
            >
                <View>
                    <Text
                        className="text-2xl text-center text-white font-bold"
                    >Welcome to Expo Router.</Text>
                    <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100 }} />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Welcome;