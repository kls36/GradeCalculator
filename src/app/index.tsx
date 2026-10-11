import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles/theme";

export default function Index() {
  const [fontsLoaded] = useFonts({
    InstrumentRegular: require("../../assets/fonts/static/InstrumentSans-Regular.ttf"),
    InstrumentBold: require("../../assets/fonts/static/InstrumentSans-Bold.ttf"),
    InstrumentSemiBold: require("../../assets/fonts/static/InstrumentSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Welcome to your Grade Calculator!</Text>
      <Link href="/grade" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>lets go calculate your grade!</Text>
        </Pressable>  
      </Link>
    </View>
  );
}