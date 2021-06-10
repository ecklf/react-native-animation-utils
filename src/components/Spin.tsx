import React, { ReactNode, useEffect } from "react";
import type { ViewProps } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface Props extends ViewProps {
  children: ReactNode;
}

const Spin = ({ children, style }: Props) => {
  const spin = useSharedValue(0);
  const spinStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${spin.value}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    spin.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    return () => {
      cancelAnimation(spin);
    };
  }, [spin]);

  return <Animated.View style={[spinStyles, style]}>{children}</Animated.View>;
};

export default Spin;
