import { View, Text, Linking, StyleSheet, Alert } from "react-native";

export default function SupportScreen() {
  const handleEmailLink = async () => {
    const url = "mailto:onys.drizzle@gmail.com";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url).catch((err) => {
        Alert.alert("Error", "이메일 앱을 열 수 없습니다.", [{ text: "OK" }], {
          cancelable: false,
        });
      });
    } else {
      Alert.alert(
        "Error",
        "사용 가능한 이메일 앱이 없습니다.",
        [{ text: "OK" }],
        {
          cancelable: false,
        }
      );
    }
  };

  return (
    <View style={S.container}>
      <Text style={S.text}>오류 제보, 문의사항, 건의사항</Text>
      <Text style={S.email} onPress={handleEmailLink}>
        onys.drizzle@gmail.com
      </Text>

      <Text style={S.text}>가랑비는 당신의 합격을 기원합니다.</Text>

      <Text style={S.versionText}>버전 1.0.0 (베타 테스트)</Text>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 40,
    paddingTop: 0,
    paddingBottom: 20,
  },
  email: {
    color: "#279DF4",
    fontWeight: "500",
  },
  text: {
    textAlign: "center",
  },
  versionText: {
    textAlign: "center",
    color: "#aaa",
  },
});
