import React, { useEffect } from "react";
import type { ViewProps } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface Props extends ViewProps {}

const Ping = ({ style }: Props) => {
  const ping = useSharedValue(0);

  const pingStyles = useAnimatedStyle(() => {
    return ping.value > 0.75
      ? {
          transform: [{ scale: 2 * ping.value }],
          opacity: 1 - ping.value,
        }
      : {};
  });

  useEffect(() => {
    ping.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.bezier(0, 0, 0.2, 1),
      }),
      -1,
      false,
    );
    return () => {
      cancelAnimation(ping);
    };
  }, [ping]);

  return <Animated.View style={[pingStyles, style]} />;
};

export default Ping;
