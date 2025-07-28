import { useAudioPlayerContext } from "@/context/audio-player-context";
import { Adzan } from "@/types";
import { useAudioPlayer } from "expo-audio";
import { Image } from "expo-image";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = Adzan;

export default function MediaListItem({ title, muadzin, flag, sound, id, lyric }: Props) {
  const { player, setPlayer, setIsPlaying, setAdzan } = useAudioPlayerContext();

  const playerInstance = useAudioPlayer(sound);

  useEffect(() => {
    setPlayer(playerInstance);
  }, []);

  function handleOnClick() {
    setAdzan({ id, title, muadzin, flag, sound, lyric });
    player?.replace(sound);
    player?.play();
    setIsPlaying(true);
  }

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
      onPress={handleOnClick}
    >
      <Image
        source={flag}
        style={{ width: 40, height: 40, borderRadius: 10, objectFit: "cover" }}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <Text>{muadzin}</Text>
      </View>
    </TouchableOpacity>
  );
}