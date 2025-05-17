import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Flex from "./Flex";
import InputComLabel from "./InputComLabel";
import MyButton from "./MyButton";

type TripFormProps = {
  btnName: string;
  rota: string;
};

export default function TripForm({ btnName, rota }: TripFormProps) {
  return (
    <View>
      <Flex>
        <InputComLabel campo="Name" placeholder="France 2024" />
        <InputComLabel campo="Currency" placeholder="EUR - Euro" />
        <InputComLabel campo="Trip starts at" placeholder="10/12/2024" />
        <InputComLabel campo="Trip ends at" placeholder="20/12/2024" />
        <InputComLabel campo="Budget" placeholder="$10,000" />
      </Flex>
      <MyButton buttonName={btnName} rota={rota} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  /*   button: {
    marginTop: 50,
  }, */
});
