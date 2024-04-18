import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-5xl font-pbold">Aora</Text>
      <Text className=" text-xs font-bold">Yo this is test</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
