import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const CheckpointMessage = ({ item }) => {
  return (
   <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* Git icon */}
      <Feather name="git-commit" size={16} color="#3B82F6" />

      {/* Text */}
      <Text style={{ color: "#3B82F6", fontWeight: "600", marginHorizontal: 6 }}>
        Checkpoint
      </Text>

      <LinearGradient
        colors={["#3B82F6", "transparent"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          flex: 1,
          height: 2,
          borderRadius: 1,
        }}
      />
    </View>

  );
};

export default CheckpointMessage;