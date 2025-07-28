export type Adzan = {
  id: number;
  title: string;
  muadzin: string;
  flag: any;
  sound: any;
  lyric: {
    time: number;
    arabic: string;
    latin: string;
    translation: string;
  }[];
};