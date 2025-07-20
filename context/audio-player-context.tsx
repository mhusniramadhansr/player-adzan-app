import { AudioPlayer } from "expo-audio";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AudioPlayerContextType = {
  player: AudioPlayer | undefined;
  setPlayer: Dispatch<SetStateAction<AudioPlayer | undefined>>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player, setPlayer] = useState<AudioPlayer | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <AudioPlayerContext.Provider
      value={{ player, setPlayer, isPlaying, setIsPlaying }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const audioPlayerContext = useContext(AudioPlayerContext);
  if (!audioPlayerContext) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider"
    );
  }
  return audioPlayerContext;
};