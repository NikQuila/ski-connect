import React from "react";
import { View } from "react-native";

const BackgroundWrapper = (props) => {
  const { children, style } = props;

  return (
    <View style={[{ flex: 1, backgroundColor: "#6E7B8B" }, style]}>
      {children}
    </View>
  );
};

export default BackgroundWrapper;
