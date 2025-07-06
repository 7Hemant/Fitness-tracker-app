import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Index() {
  const [exercise, setExercise] = React.useState<string>("");
  console.log("Current input:", exercise);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(newText) => setExercise(newText)} placeholder="Enter exercise" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 250,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
