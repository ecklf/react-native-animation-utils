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

const Pulse = ({ children, style }: Props) => {
  const pulse = useSharedValue(0.5);

  const pulseStyles = useAnimatedStyle(() => {
    return {
      opacity: pulse.value,
    };
  });

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.6, 1),
      }),
      -1,
      true,
    );
    return () => {
      cancelAnimation(pulse);
    };
  }, [pulse]);

  return <Animated.View style={[pulseStyles, style]}>{children}</Animated.View>;
};

export default Pulse;
