import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import Exercise from "./Exercise";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./features/settings/Settings";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Exercise">
          <Drawer.Screen
            name="Exercise"
            component={Exercise}
            options={{ headerTitle: "", title: "연습 화면" }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{ title: "설정" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
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
