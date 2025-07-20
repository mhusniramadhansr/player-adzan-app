import Header from "@/components/header";
import MediaList from "@/components/media-list";
import PlayButton from "@/components/play-button";
import { AudioPlayerProvider } from "@/context/audio-player-context";
import { useResponsiveHeight } from "@/utils/use-responsive-height";
import { StatusBar, View } from "react-native";

export default function Index() {
  const headerHeight = useResponsiveHeight(40);
  const mediaListHeight = useResponsiveHeight(60);

  return (
    <AudioPlayerProvider>
      <View>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content" // atau 'dark-content' tergantung warna background kamu
        />
        <Header height={headerHeight} />
        <PlayButton />
        <MediaList height={mediaListHeight} />
      </View>
    </AudioPlayerProvider>
  );
}