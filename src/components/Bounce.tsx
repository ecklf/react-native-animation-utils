import React, { ReactNode, useEffect } from "react";
import type { ViewProps } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface Props extends ViewProps {
  bounceHeight: number;
  children: ReactNode;
}

const Bounce = ({ children, style, bounceHeight }: Props) => {
  const bounce = useSharedValue(0);
  const bounceStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -bounce.value }],
    };
  });

  useEffect(() => {
    bounce.value = withRepeat(
      withSequence(
        withTiming(-Math.abs(bounceHeight), {
          duration: 500,
          easing: Easing.bezier(0.8, 0, 1, 1),
        }),
        withTiming(0, {
          duration: 500,
          easing: Easing.bezier(0, 0, 0.2, 1),
        }),
      ),
      -1,
      true,
    );

    return () => {
      cancelAnimation(bounce);
    };
  }, [bounce, bounceHeight]);

  return (
    <Animated.View style={[bounceStyles, style]}>{children}</Animated.View>
  );
};

export default Bounce;
