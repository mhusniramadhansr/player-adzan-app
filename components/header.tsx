import { useAudioPlayerContext } from "@/context/audio-player-context";
import { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function Header({ height }: { height: number }) {
  const backgroundImage = require("@/assets/images/islamic-background.png");
  const { player, adzan } = useAudioPlayerContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (player) {
        setCurrentTime(player.currentTime);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [player]);

  useEffect(() => {
    const index = adzan?.lyric.findLastIndex(
      (line) => line.time <= currentTime
    );
    setActiveIndex(index!);
  }, [currentTime]);

  if (!player?.playing || !adzan?.lyric || !adzan.lyric[activeIndex]) {
    return (
      <ImageBackground
        style={{ width: "100%", height: height, paddingTop: 100 }}
        source={backgroundImage}
      />
    );
  }

  return (
    <ImageBackground
      style={{
        width: "100%",
        height: height,
        paddingTop: 100,
      }}
      source={backgroundImage}
    >
      <View style={{ padding: 25, alignItems: "center" }}>
        <Text style={{ fontSize: 24, color: "yellow", textAlign: "center" }}>
          {adzan.lyric[activeIndex].arabic}
        </Text>
        <Text style={{ fontSize: 17, color: "white", textAlign: "center" }}>
          {adzan.lyric[activeIndex].latin}
        </Text>
        <Text style={{ fontSize: 16, color: "gray", textAlign: "center" }}>
          {adzan.lyric[activeIndex].translation}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "center",
            marginTop: 13,
          }}
        >
          {`${adzan?.title} - ${adzan?.muadzin}`}
        </Text>
      </View>
    </ImageBackground>
  );
}
