import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { login } from "./config copy/authentication/action";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    let result = await login(1);
    setData(result);
  };

  return (
    <View style={styles.container}>
      {data?.map((val, index) => {
        return (
          <>
            <Text key={index}>
              {val?.email} {val?.first_name}
            </Text>
          </>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
