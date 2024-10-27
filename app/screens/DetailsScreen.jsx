import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const navigation = useNavigation();

  const navigateToReadPost = () => {
    navigation.navigate("Feed"); // Correctly navigate to ReadPostScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetailsScreen</Text>
      <Button title="Go to Read Post" onPress={navigateToReadPost} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
