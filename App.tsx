import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import RootStack from "./navigators/RootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
  });

  const onFinish = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    onFinish();
  }, [fontsLoaded]);

  if (fontsLoaded) return <RootStack />;
  else return null;
}
