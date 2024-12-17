import { ScrollView, View, Text, StyleSheet, SafeAreaView } from "react-native";

import { CustomInput, CustomButton, FormController } from "../src/components";
import GlobalEx from "../src/utils/GlobalEx";
import fields from "../src/utils/fields";
import { useHotelHook } from "../src/hooks";
import HotelDetailsCard from "../src/components/HotelDetailsCard";
export default function HomeScreen() {
  // custom hook
  const { control, handleSubmit, onSubmitHotelDetails, loading, results } =
    useHotelHook();
  // Memoize field render to avoid re-mapping on each render
  const loginFields = GlobalEx.useMemo(
    () =>
      fields.loginFields.map(
        (field: {
          name: any;
          placeholder: any;
          label: any;
          icons: any;
          rules: any;
          left_icon: any;
        }) => (
          <FormController
            {...field}
            key={field.name}
            placeholder={field.placeholder}
            control={control}
            label={field.label}
            name={field.name}
            rules={field.rules}
          />
        )
      ),
    [control]
  );

  console.log("results", results);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 20, margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              marginVertical: 20,
            }}
          >
            Hotel Details{" "}
          </Text>

          {loginFields}
          <CustomButton
            onPress={handleSubmit(onSubmitHotelDetails)}
            title={"Get Hotel Details"}
            loading={loading}
          />

          {results != null && results?.generated_text != undefined && (
            <HotelDetailsCard hotelDetails={results?.generated_text} />
          )}

          {results != null && results?.generated_text == undefined && (
            <View style={styles.not_found}>
              <Text style={styles.not_found_text}>Hotel Details Not Found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  not_found: {
    marginVertical: 30,
    textAlign: "center",
    alignSelf: "center",
  },
  not_found_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
