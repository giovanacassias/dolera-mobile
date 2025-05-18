import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import TitleH1 from "../components/TitleH1";
import Flex from "../components/Flex";
import Body from "../components/Body";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";

function index() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <Header />
        <TitleH1 title="Hi Caio!"></TitleH1>
        <Flex>
          <Body
            buttonName="new trip"
            description="It seems that you don’t have any trips yet. Let’s fix that!"
            h2="Oops..."
            imgURL="https://res.cloudinary.com/ddb437lsi/image/upload/v1747450986/passport.png"
            rota="/newtrip"
          />
        </Flex>
      </View>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(index);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
