import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "green",
        }}
      >
        {" "}
        second screen (Tracker)
      </Text>
    </View>
  );
}
