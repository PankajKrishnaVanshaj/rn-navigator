import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const Logo = ({ type }) => {
  // Create a ref for the animated value
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Define the bounce animation
    const bounceAnimation = () => {
      bounceValue.setValue(0); // Reset the value to 0
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 7, // Move down
          duration: 1000, // Duration for the downward movement
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(bounceValue, {
          toValue: 0, // Move back up to original position
          duration: 1000, // Duration for the upward movement
          useNativeDriver: true, // Use native driver for better performance
        }),
      ]).start(() => bounceAnimation()); // Loop the bounce animation
    };

    // Start the bounce animation
    bounceAnimation();

    // Cleanup on unmount (no need to call bounceValue.stop())
    return () => {
      // Optional: Reset value on unmount if needed
      bounceValue.setValue(0);
    };
  }, [bounceValue]);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={[styles.pkText, type && styles.pkTextLarge]}>PK</Text>
        <Animated.Image // Use Animated.Image for animation
          source={require("../assets/blogify.png")}
          style={[styles.logo, { transform: [{ translateY: bounceValue }] }]} // Apply the bounce transformation
          resizeMode="contain"
        />
        <Text style={[styles.blogifyText, type && styles.blogifyTextLarge]}>
          Blogify
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  pkText: {
    fontSize: 25,
    color: "#c9304b",
    fontWeight: "600",
  },
  pkTextLarge: {
    fontSize: 35,
    fontWeight: "900",
  },
  logo: {
    width: 32,
    height: 32,
    marginHorizontal: -0.5,
  },
  blogifyText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000",
  },
  blogifyTextLarge: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Logo;
