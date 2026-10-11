import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/theme";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Welcome to your Grade Calculator!</Text>
      
      <Link href="/grade" asChild>
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>Let's go calculate your grade!</Text>
        </Pressable>  
      </Link>
    </View>
  );
}