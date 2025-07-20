import { FlatList, ImageBackground } from "react-native";
import MediaListItem from "./media-list-item";
import { adzanList } from "@/data/adzan-list";

export default function MediaList({ height }: { height: number }) {
  const backgroundImage = require("@/assets/images/mosque-sketch.jpeg");
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: height,
      }}
      imageStyle={{
        opacity: 0.5,
      }}
      source={backgroundImage}
    >
      <FlatList
        data={adzanList}
        renderItem={({ item }) => (
          <MediaListItem title={item.title} muadzin={item.muadzin} flag={item.flag} sound={item.sound} />
        )}
      />
    </ImageBackground>
  );
}