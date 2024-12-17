import { View, StyleSheet } from "react-native";
import { Input } from "native-base";

export default function CustomInput({
  name = "",
  placeholder = "",
  onChange = () => {},
  value = "",
}) {
  return (
    <View style={styles.InputMain}>
      <Input
        size="2xl"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InputMain: {
    marginVertical: 10,
  },
});
