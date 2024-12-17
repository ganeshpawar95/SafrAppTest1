import { Button } from "native-base";
import { StyleSheet } from "react-native";
export default function CustomButton({
  title = "",
  onPress = () => {},
  loading = false,
}) {
  return (
    <Button onPress={onPress} style={styles.BtnStyle} isLoading={loading}>
      {title}
    </Button>
  );
}
const styles = StyleSheet.create({
  BtnStyle: {
    marginVertical: 10,
  },
});
