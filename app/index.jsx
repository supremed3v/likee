import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="h-full bg-slate-500">
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
            <StatusBar translucent={false} />
        </SafeAreaView>
    )
}

export default Welcome;