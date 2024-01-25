import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const login = () => {
  return (
    <View style={styles.styleMainContainer}>
      <Link href="/register" asChild>
        <Pressable style={styles.styleRegisterButton}>
          <Text>Register</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  styleMainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  styleRegisterButton: {
    margin: 10,
    alignItems: "center",
  },
});
