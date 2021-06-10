import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const Spinner = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Circle
        cx={12}
        cy={12}
        r={10}
        opacity={0.25}
        stroke="white"
        strokeWidth={4}
      />
      <Path
        opacity={0.75}
        fill="white"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </Svg>
  );
};

export default Spinner;
