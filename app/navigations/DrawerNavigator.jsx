import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TabNavigator from "./TabNavigator"; // Ensure this component is correct
import Logo from "../../components/Logo";
import Profile from "../../components/Profile"; // Ensure this component is correct

const Drawer = createDrawerNavigator();

// Custom Header Component
const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications-outline" size={25} color="#c9304b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="bookmark-outline" size={25} color="#c9304b" />
        </TouchableOpacity>
      </View>
      <Logo style={styles.logo} />

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="search-outline" size={25} color="#c9304b" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.icon}
        >
          <Ionicons name="person-outline" size={25} color="#c9304b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // Show custom header
        header: () => <CustomHeader />, // Use custom header
      }}
    >
      {/* Main Tab Navigator */}
      <Drawer.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{
          drawerItemStyle: { display: "none" }, // Hide from drawer
        }}
      />

      {/* Profile linked to TabNavigator's Profile Tab */}
      <Drawer.Screen
        name="Profile"
        component={TabNavigator} // Use TabNavigator for consistency
        options={{
          drawerLabel: () => <Profile />,
        }}
      />
    </Drawer.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 41, // Set header height
    backgroundColor: "#ffff",
    paddingHorizontal: 5, // Add padding horizontally
  },
  leftContainer: {
    flexDirection: "row", // Align icons in a row
    alignItems: "center",
  },
  logo: {
    flex: 1, // Allow the logo to grow and fill the space
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileLabel: {
    padding: 10, // Optional: add some padding around the label
  },
});
