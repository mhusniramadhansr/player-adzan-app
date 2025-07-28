import { adzanList } from "@/data/adzan-list";
import { FlatList, ImageBackground } from "react-native";
import MediaListItem from "./media-list-item";
import AdPlaceholder from "./ad-placeholder";

export default function MediaList({ height }: { height: number }) {
  const backgroundImage = require("@/assets/images/mosque-sketch.png");
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: height,
      }}
      imageStyle={{
        opacity: 0.3,
      }}
      source={backgroundImage}
    >
      <FlatList
        data={adzanList}
        renderItem={({ item }) => (
          <MediaListItem
            id={item.id}
            title={item.title}
            muadzin={item.muadzin}
            flag={item.flag}
            sound={item.sound}
            lyric={item.lyric}
          />
        )}
      />
      <AdPlaceholder />
    </ImageBackground>
  );
}