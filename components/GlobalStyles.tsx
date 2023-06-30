import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: "NotoSansKR", // Use your font name here
  },
});

const AppText = (props: any) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

export default AppText;
