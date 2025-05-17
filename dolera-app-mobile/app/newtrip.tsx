import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function newtrip() {
  return (
    <View>
      <Text>newtrip</Text>
      <Button buttonName="voltar" rota="/" />
    </View>
  );
}
