import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="tracker/index"
        options={{
          title: "Tracker",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="graph/index"
        options={{
          title: "Graph",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="area-chart" color={color} />,
        }}
      />
    </Tabs>
  );
}
