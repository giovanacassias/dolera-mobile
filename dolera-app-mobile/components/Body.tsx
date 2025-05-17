import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Flex from "./Flex";
import TitleH2 from "./TitleH2";
import Button from "./Button";

type BodyProps = {
  h2: string;
  description: string;
  imgURL: string;
  buttonName: string;
};

export default function Body({
  h2,
  description,
  imgURL,
  buttonName,
}: BodyProps) {
  return (
    <Flex>
      <TitleH2 title={h2} />
      <Flex align="center" justify="space-between" style={styles.container}>
        <Text>{description}</Text>
        <Image source={{ uri: imgURL }} style={styles.img} />
        <Button buttonName={buttonName}></Button>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    //backgroundColor: "red",
    height: "72%",
  },

  img: {
    //marginTop: 70,
    width: 120,
    height: 120,
  },
});
