import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Bounce, Ping, Pulse, Spin } from "react-native-animation-utils";
import { ArrowDownIcon } from "react-native-heroicons/outline";
import LinearGradient from "react-native-linear-gradient";
import { getColor, tw } from "../tailwind";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <SafeAreaView style={tw("flex-1 bg-white")}>
      <LinearGradient
        style={tw("mx-6 my-3 flex-1 rounded-md")}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[getColor("rose-50"), getColor("rose-100")]}>
        <View style={tw("px-4 py-6 flex-1 items-center justify-center")}>
          <View
            style={[
              tw(
                "flex-row items-center justify-center px-4 py-2 rounded-md bg-rose-600",
              ),
            ]}>
            <Spin>
              <Spinner style={tw("w-5 h-5 text-white")} />
            </Spin>
            <Text style={tw("ml-3 text-base leading-6 font-medium text-white")}>
              Processing
            </Text>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        style={tw("mx-6 my-3 flex-1 rounded-md")}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[getColor("purple-50"), getColor("purple-100")]}>
        <View style={tw("px-4 py-6 flex-1 items-center justify-center")}>
          <View
            style={tw(
              "items-center px-4 py-2 border border-purple-400 rounded-md bg-white",
            )}>
            <Text style={tw("text-base leading-6 font-medium text-purple-800")}>
              Transactions
            </Text>
            <View style={tw("-mt-1.5 -mr-1.5 absolute top-0 right-0 w-3 h-3")}>
              <Ping
                style={tw(
                  "absolute h-full w-full rounded-full bg-purple-400 opacity-75",
                )}
              />
              <View style={[tw("rounded-full h-3 w-3 bg-purple-500")]} />
            </View>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        style={tw("mx-6 my-3 flex-1 rounded-md")}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[getColor("lightBlue-50"), getColor("lightBlue-100")]}>
        <View style={tw("flex-1 px-4 py-6 items-center justify-center")}>
          <Pulse
            style={tw("p-4 flex-row border border-lightBlue-300 rounded-md")}>
            <View style={tw("w-12 h-12 rounded-full bg-lightBlue-400")} />
            <View style={tw("ml-4 flex-1")}>
              <View style={tw("w-3/4 h-4 rounded bg-lightBlue-400")} />
              <View style={tw("mt-2 flex-grow h-4 rounded bg-lightBlue-400")} />
              <View style={tw("w-5/6 mt-2 h-4 rounded bg-lightBlue-400")} />
            </View>
          </Pulse>
        </View>
      </LinearGradient>

      <LinearGradient
        style={tw("mx-6 my-3 flex-1 rounded-md")}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[getColor("amber-50"), getColor("amber-100")]}>
        <View style={tw("flex-1 px-4 py-6 items-center justify-center")}>
          <Bounce bounceHeight={6}>
            <ArrowDownIcon size={24} style={tw("-mt-2 text-amber-900")} />
          </Bounce>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
