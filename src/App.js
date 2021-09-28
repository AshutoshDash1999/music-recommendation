import "./App.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
    { name: "Follow You"},
    { name: "Wrecked"},
    { name: "Believer"},
    { name: "Radioactive"},
    { name: "Demons"},
    { name: "Thunder"},
    { name: "Birds"},
    { name: "Stronger"},
    { name: "Glory"},
    { name: "Born For This"},
    { name: "The Champion"},
    { name: "On and On"},
    { name: "In My Bones"},
    { name: "Dreamin (with blackbear"},
    { name: "Call Out My Name"},
    { name: "Binding Lights"},
    { name: "In Your Eyes"}
  ],
  ImagineDragons: [
    { name: "Follow You"},
    { name: "Wrecked"},
    { name: "Believer"},
    { name: "Radioactive"},
    { name: "Demons"},
    { name: "Thunder"},
    { name: "Birds"},
    { name: "1+1"},
    { name: "Courage To Change"},
    { name: "Elastic Heart"},
    { name: "Cheap Thrills"},
    { name: "Chandelier"},
    { name: "Unstoppable"},
    { name: "Never Give Up"},
    { name: "Dusk Till Dawn"}
  ],
  Sia: [
    { name: "1+1"},
    { name: "Courage To Change"},
    { name: "Elastic Heart"},
    { name: "Cheap Thrills"},
    { name: "Chandelier"},
    { name: "Unstoppable"},
    { name: "Never Give Up"},
    { name: "Dusk Till Dawn"}
  ],
  TheWeekend: [
    { name: "Call Out My Name"},
    { name: "Binding Lights"},
    { name: "In Your Eyes"}
  ],
  TheScore: [
    { name: "Stronger"},
    { name: "Glory"},
    { name: "Born For This"},
    { name: "The Champion"},
    { name: "On and On"},
    { name: "In My Bones"},
    { name: "Dreamin (with blackbear"}
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("All");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="App-header">

      <h1>Music Recommendations</h1>{" "}
      <p style={{ fontSize: "medium" }}>
        Checkout my favorite songs. Select an artist to get started{" "}
      </p>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
          style={{
            cursor: "pointer",
            background: "#059669",
            borderRadius: "1rem",
            padding: "0.9rem  1.5rem",
            border: "2px solid #059669",
            margin: "1rem 0.3rem",
            color: "white"
            }}
            onClick={() => genreClickHandler(genre)}
            >
            {" "}
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((song) => (
            <li
            key={song.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "2px solid #15171b",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.7rem",
              background: "#15171b"
            }}
            >
              {" "}
              <div style={{ fontSize: "large" }}>{song.name}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
