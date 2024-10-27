import { createStackNavigator } from "@react-navigation/stack";
import ReadPostScreen from "../screens/ReadPostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ReadPost" component={ReadPostScreen} />
    </Stack.Navigator>
  );
}
