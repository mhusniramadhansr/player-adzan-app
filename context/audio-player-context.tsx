import { Adzan } from "@/types";
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
  adzan: Adzan | undefined;
  setAdzan: Dispatch<SetStateAction<Adzan | undefined>>;
};

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player, setPlayer] = useState<AudioPlayer | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [adzan, setAdzan] = useState<Adzan | undefined>(undefined);

  return (
    <AudioPlayerContext.Provider
      value={{ player, setPlayer, isPlaying, setIsPlaying, adzan, setAdzan }}
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