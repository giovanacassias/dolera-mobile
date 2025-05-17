import { View, Text, StyleSheet, TextProps } from "react-native";
import React from "react";
import Header from "../components/Header";
import TitleH1 from "../components/TitleH1";

export default function index() {
  return (
    <View>
      <Header />
      <TitleH1 title="Hi Caio!"></TitleH1>
    </View>
  );
}

const styles = StyleSheet.create({});
