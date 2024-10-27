import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const dummyBlog = {
  _id: "12345",
  title: "Exploring the Future of Technology",
  content:
    "Technology continues to evolve at a rapid pace, influencing industries across the globe. From AI to blockchain, advancements shape the future.",
  banner: "../assets/blogify.png", // Placeholder banner image
  createdAt: "2024-10-01T10:00:00Z",
  createdBy: {
    username: "john_doe",
    avatar: "https://via.placeholder.com/50", // Placeholder avatar image
  },
};

export default function BlogPostCarousel({ currentBlog = dummyBlog }) {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 1) % 1); // Dummy logic with a single slide
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 1); // Dummy logic with a single slide
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: currentBlog.banner }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Post", { postId: currentBlog._id })
            }
          >
            <Text style={styles.title}>
              {currentBlog.title.slice(0, 100) + "..."}
            </Text>
          </TouchableOpacity>

          <ScrollView>
            <Text style={styles.content}>
              {currentBlog.content
                ? currentBlog.content.slice(0, 275) + "..."
                : ""}
            </Text>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.prevButton} onPress={prevSlide}>
          <Text style={styles.arrow}>&lt;</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {new Date(currentBlog.createdAt).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.userContainer}>
          <Text>{currentBlog.createdBy.username}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  imageBackground: {
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E90FF", // Primary color
    textAlign: "center",
    textDecorationLine: "underline",
  },
  content: {
    color: "white",
    fontSize: 14,
    marginTop: 8,
    textAlign: "justify",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: 8,
    transform: [{ translateY: -15 }],
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 8,
    transform: [{ translateY: -15 }],
  },
  arrow: {
    fontSize: 30,
    color: "white",
  },
  dateContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  dateText: {
    fontSize: 12,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  userContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingRight: 8,
    borderRadius: 12,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
