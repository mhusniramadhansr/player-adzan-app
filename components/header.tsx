import { ImageBackground } from "react-native";

export default function Header({ height }: { height: number }) {
  const backgroundImage = require("@/assets/images/islamic-background.png");

  return (
    <ImageBackground
      style={{
        width: "100%",
        height: height,
      }}
      source={backgroundImage}
    ></ImageBackground>
  );
}