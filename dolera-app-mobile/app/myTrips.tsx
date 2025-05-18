import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Flex from "../components/Flex";
import TitleH1 from "../components/TitleH1";
import Header from "../components/Header";
import { Avatar, Card } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function myTrips() {
  const params = useLocalSearchParams();
  const trip = params.trip ? JSON.parse(params.trip as string) : null;

  return (
    <Flex style={styles.container}>
      <Header />
      <TitleH1 title="Caio's trips" />
      <MaterialIcons name="flight" size={32} color="black" />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
