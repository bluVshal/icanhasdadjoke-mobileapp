import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Colours = () => {
  const color = useSelector((state) => state.color.value); //reading the state
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(setColor())} //Dispatch action
      >
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList data={color} />
    </View>
  );
};

export default Colours;
