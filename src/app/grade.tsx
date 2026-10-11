import { Pressable, ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { useState } from "react";
import { styles } from "../styles/theme";

export default function Grade() {

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Grade Calculator</Text>
        <Link href="/" asChild>
        
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>go back home</Text>
          </Pressable>
        </Link>
    </View>
  );
  
}

