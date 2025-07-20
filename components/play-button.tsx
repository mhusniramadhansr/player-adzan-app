import { useAudioPlayerContext } from "@/context/audio-player-context";
import { Pressable } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function PlayButton() {
  const { isPlaying, player, setIsPlaying } = useAudioPlayerContext();

  function handleOnClick() {
    if (isPlaying) {
      player?.pause();
      setIsPlaying(false);
    } else {
      player?.play();
      setIsPlaying(true);
    }
  }

  return (
    <Pressable
      style={{
        backgroundColor: "#f7b801",
        padding: 10,
        borderRadius: 100,
        margin: 10,
        position: "absolute",
        zIndex: 1,
        top: 285,
        left: 270,
      }}
      onPress={handleOnClick}
    >
      {isPlaying ? (
        <Svg fill="white" viewBox="0 0 24 24" style={{ width: 30, height: 30 }}>
          <G>
            <Path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
            <Path d="M14 8v8a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zM8 8v8a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0z" />
          </G>
        </Svg>
      ) : (
        <Svg viewBox="0 0 24 24" fill="white" style={{ width: 30, height: 30 }}>
          <G>
            <Path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <Path d="M9 16.766V7.234L16.944 12zm2-6v2.468L13.056 12z" />
          </G>
        </Svg>
      )}
    </Pressable>
  );
}