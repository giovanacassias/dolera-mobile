import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Flex from "./Flex";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

type TripCardProps = {
  name: string;
  currency: string;
  start: string;
  end: string;
  budget: string;
};

export default function TripCard({
  name,
  currency,
  start,
  end,
  budget,
}: TripCardProps) {
  return (
    <Flex style={styles.container} direction="row">
      <Flex style={styles.icon} align="center" justify="center">
        <MaterialIcons name="flight" size={40} color="#233329" />
      </Flex>
      <Flex style={styles.info} align="flex-start" justify="center">
        <Text style={styles.tripName}>{name}</Text>
        <Flex style={styles.details}>
          <Text style={styles.detailsText}>{currency}</Text>
          <Text style={styles.detailsText}>{budget}</Text>
        </Flex>
        <Flex direction="row" justify="space-between" style={styles.details}>
          <Text style={styles.detailsText}>{start}</Text>
          <Text> - </Text>
          <Text style={styles.detailsText}>{end}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    height: 120,
    //flex: 1,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#EDEDED",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  icon: {
    height: "100%",
    //backgroundColor: "blue",
    width: "25%",
  },

  info: {
    //backgroundColor: "green",
    width: "75%",
  },

  tripName: {
    fontSize: 20,
    color: "#233329",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
  },

  details: {
    //backgroundColor: "blue",
    width: "80%",
    fontSize: 12,
    color: "#233329",
  },

  detailsText: {
    fontWeight: "bold",
  },
});
