import {
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ onSplashComplete }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const taglineAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Parallel animations for splash elements
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 3,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(taglineAnim, {
        toValue: 1,
        duration: 2000,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Fade-out effect at the end
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(onSplashComplete);
    });

    // Infinite rotation loop
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000, // Changed to 5 seconds for rotation
        useNativeDriver: true,
        easing: Easing.linear, // Correct usage of easing function
      })
    ).start();

    return () => {
      // Reset animations on unmount
      scaleAnim.setValue(1);
      textAnim.setValue(0);
      taglineAnim.setValue(0);
      fadeAnim.setValue(1);
      rotateAnim.setValue(0);
    };
  }, [onSplashComplete]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Rotating Circular Gradient Background */}
      <Animated.View
        style={[styles.circleWrapper, { transform: [{ rotate }] }]}
      >
        <View style={[styles.circle, { backgroundColor: "#c9304b" }]} />
        <View
          style={[
            styles.circle,
            styles.overlay,
            { backgroundColor: "#6a11cb" },
          ]}
        />
        <View
          style={[
            styles.circle,
            styles.innerOverlay,
            { backgroundColor: "#f7ab53" },
          ]}
        />
      </Animated.View>

      {/* Logo Image Animation */}
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Image
          source={require("../../assets/blogify.png")}
          style={styles.image}
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Optional: dark background for contrast
  },
  circleWrapper: {
    position: "absolute",
    width: width * 1.4,
    height: width * 1.4,
    borderRadius: width * 0.7,
    top: height / 2 - width * 0.7,
    left: width / 2 - width * 0.7,
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: width * 0.75,
  },
  overlay: {
    top: 20,
    left: 20,
    width: "80%",
    height: "80%",
    borderRadius: width * 0.75 * 0.9,
  },
  innerOverlay: {
    top: 40,
    left: 40,
    width: "55%",
    height: "55%",
    borderRadius: width * 0.75 * 0.8,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  tagline: {
    color: "#ddd",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
