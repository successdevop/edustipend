import React from "react";
import SongTrack from "./SongTrack";
import Button from "./Button";

function SongTrackList() {
  return (
    <div className="songTrackList">
      <h4>Trending Songs</h4>
      <SongTrack />
      <SongTrack />
      <SongTrack />
      <SongTrack />
      <SongTrack />
      <Button text="View more" />
    </div>
  );
}
export default SongTrackList;
