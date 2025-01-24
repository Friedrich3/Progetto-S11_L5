import { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import NewReleases from "./NewReleases";
import NewsSection from "./NewsSection";
import PageExplorer from "./PageExplorer";
import RadioEpisode from "./RadioEpisode";
import { SearchResponse } from "../types/SearchFetch";

const MainComponent = function () {

    const [currentSong, setCurrentSong] = useState<null | SearchResponse>(null);

  return (
    <main className=" container-fluid">
      <MusicPlayer song={currentSong}/>
      <NewsSection />
      <RadioEpisode />
      <NewReleases setCurrentSong={setCurrentSong}/>
      <PageExplorer />
    </main>
  );
};
export default MainComponent;
