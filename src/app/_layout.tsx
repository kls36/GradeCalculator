import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InstrumentRegular: require("../../assets/fonts/static/InstrumentSans-Regular.ttf"),
    InstrumentSemiBold: require("../../assets/fonts/static/InstrumentSans-SemiBold.ttf"),
    InstrumentBold: require("../../assets/fonts/static/InstrumentSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}