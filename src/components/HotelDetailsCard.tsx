import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

export default function HotelDetailsCard({ hotelDetails }) {
  // Star rating display helper
  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <View>
      {/* Hotel Name */}
      <Text style={styles.sectionTitle}>Hotel Name</Text>

      <Text style={styles.hotelName}>{hotelDetails?.hotel_name}</Text>

      {/* Address */}
      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.address}>{hotelDetails?.address}</Text>

      {/* Average Price Per Night */}
      <Text style={styles.sectionTitle}>Average Price Per Night</Text>
      <Text style={styles.price}>{hotelDetails.average_price_per_night}</Text>

      {/* Star Rating */}
      <Text style={styles.sectionTitle}>Star Rating</Text>
      <Text style={styles.starRating}>
        {renderStars(hotelDetails?.star_rating)}
      </Text>

      {/* Amenities */}
      <Text style={styles.sectionTitle}>Amenities</Text>
      <FlatList
        data={hotelDetails.amenities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>- {item}</Text>}
      />

      {/* Nearby Attractions */}
      <Text style={styles.sectionTitle}>Nearby Attractions</Text>
      <FlatList
        data={hotelDetails.nearby_attractions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>- {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginTop: 20,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  price: {
    fontSize: 16,
    color: "#27ae60",
    fontWeight: "600",
  },
  starRating: {
    fontSize: 18,
    color: "#f1c40f",
    fontWeight: "600",
  },
  listItem: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 5,
  },
});
