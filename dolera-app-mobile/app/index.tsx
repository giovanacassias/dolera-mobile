import { View, Text, StyleSheet, TextProps } from "react-native";
import React from "react";
import Header from "../components/Header";
import TitleH1 from "../components/TitleH1";
import Flex from "../components/Flex";
import Body from "../components/Body";

export default function index() {
  return (
    <View style={styles.container}>
      <Header />
      <TitleH1 title="Hi Caio!"></TitleH1>
      <Flex>
        <Body
          buttonName="new trip"
          description="It seems that you don’t have any trips yet. Let’s fix that!"
          h2="Oops..."
          imgURL="https://res.cloudinary.com/ddb437lsi/image/upload/v1747450986/passport.png"
        />
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
