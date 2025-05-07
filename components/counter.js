import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../api/store";

const Calc = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Text> Calculation </Text>
      <TouchableOpacity
        onPress={() => dispatch(increment())} //Dispatch action

      >
        <Text style={{ fontSize: 20 }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(decrement())} //Dispatch action

      >
        <Text style={{ fontSize: 20 }}>Subtract</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}>{ count }</Text>
    </View>
  );
};

export default Calc;
