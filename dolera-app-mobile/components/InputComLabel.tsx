import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

type InputComLabelProps = {
  campo: string;
  placeholder: string;
};

export default function InputComLabel({
  campo,
  placeholder,
}: InputComLabelProps) {
  const [texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{campo}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={texto}
        onChangeText={setTexto}
        placeholderTextColor="#aaa"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
  },
  label: {
    fontSize: 11,
    color: "#233329",
    marginBottom: 6,
    fontWeight: "900",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
});
