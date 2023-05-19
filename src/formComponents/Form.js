import React from "react";
import "./Form.css";
import SearchBar from "./SearchBar";
import FormInfo from "./FormInfo";
import SongTrackList from "./SongTrackList";

function Form() {
  return (
    <form action="" className="form">
      <SearchBar />
      <div className="layout">
        <FormInfo />
        <SongTrackList />
      </div>
    </form>
  );
}

export default Form;
