import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Exercise from "./features/exercise/Exercise";
import Support from "./features/support/SupportScreen";
// import Settings from "./features/settings/Settings";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

const Drawer = createDrawerNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts
        await Font.loadAsync({
          PretendardThin: require("./assets/fonts/Pretendard-Thin.ttf"),
          PretendardExtraLight: require("./assets/fonts/Pretendard-ExtraLight.ttf"),
          PretendardLight: require("./assets/fonts/Pretendard-Light.ttf"),
          PretendardRegular: require("./assets/fonts/Pretendard-Regular.ttf"),
          PretendardMedium: require("./assets/fonts/Pretendard-Medium.ttf"),
          PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.ttf"),
          PretendardBold: require("./assets/fonts/Pretendard-Bold.ttf"),
          PretendardExtraBold: require("./assets/fonts/Pretendard-ExtraBold.ttf"),
          PretendardBlack: require("./assets/fonts/Pretendard-Black.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const headerTitleStyle: any = {
    headerTitleStyle: {
      fontFamily: "PretendardSemiBold",
      fontWeight: "100",
      fontSize: 17,
    },
    headerTitleAlign: "center",
  };

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Exercise">
          <Drawer.Screen
            name="Exercise"
            component={Exercise}
            options={{
              headerTitle: "가랑비 for 초등임용 2024",
              ...headerTitleStyle,
              title: "연습 화면",
            }}
          />
          {/* <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "설정",
              ...headerTitleStyle,
            }}
          /> */}
          <Drawer.Screen
            name="Support"
            component={Support}
            options={{
              title: "고객지원",
              ...headerTitleStyle,
            }}
          />
        </Drawer.Navigator>
        <Toast />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
