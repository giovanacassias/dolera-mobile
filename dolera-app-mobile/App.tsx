import { Slot } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function App() {
  return (
    <ActionSheetProvider>
      <Slot />
    </ActionSheetProvider>
  );
}
