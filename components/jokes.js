import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { joke } from "../api/store";

const Jokes = () => {
  const joke = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  return (
    <View>
      <Text> Jokes </Text>
      
    </View>
  );
};

export default Jokes;
