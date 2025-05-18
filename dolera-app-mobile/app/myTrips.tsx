import {
  View,
  Text,
  StyleSheet,
  FlatList,
  InteractionManager,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Flex from "../components/Flex";
import TitleH1 from "../components/TitleH1";
import Header from "../components/Header";
import { Avatar, Card, List } from "react-native-paper";
import TripCard from "../components/TripCard";
import data from "../services/MOCK_DATA.json";

export default function myTrips() {
  const params = useLocalSearchParams();
  const trip = params.trip ? JSON.parse(params.trip as string) : null;

  return (
    <Flex style={styles.container}>
      <Header />
      <TitleH1 title="Caio's trips" />
      <Flex justify="space-around" align="center">
        <FlatList
          style={styles.listContainer}
          data={trip ? [trip, ...data] : data}
          renderItem={({ item }) => (
            <TripCard
              name={item.name}
              currency={item.currency}
              start={item.startDate}
              end={item.endDate}
              budget={item.budget}
            />
          )}
        />
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    //width: "100%",
  },

  listContainer: {},
});
