import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type ButtonProps = {
  buttonName: string;
  rota: string;
};

export default function Button({ buttonName, rota }: ButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(rota);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.button}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FA9984",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    color: "#FAFAFA",
    fontSize: 12,
    fontWeight: "bold",
    width: 280,
    height: 45,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
});
