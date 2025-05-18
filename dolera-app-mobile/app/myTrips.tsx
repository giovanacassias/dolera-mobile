import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function myTrips() {
  const params = useLocalSearchParams();
  const trip = params.trip ? JSON.parse(params.trip as string) : null;

  return (
    <View>
      <Text>My Trips</Text>
      <Text>Name: {trip.name}</Text>
      <Text>Currency: {trip.currency}</Text>
      <Text>Start Date: {trip.startDate}</Text>
      <Text>Finish Date: {trip.endDate}</Text>
      <Text>Budget: {trip.budget}</Text>
    </View>
  );
}
