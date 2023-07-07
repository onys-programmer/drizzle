import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  onPress?: () => void;
  children?: React.ReactNode;
  title: string;
}

export default function SubmitButton({ onPress, children, title }: Props) {
  return (
    <TouchableOpacity style={S.button} onPress={onPress}>
      {children ? children : <Text style={S.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}

const S = StyleSheet.create({
  button: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#279DF4", // 원하는 색상으로 변경
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
