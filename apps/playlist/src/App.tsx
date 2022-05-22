import React from "react";
import { AppShell } from "ui";

import { Playlist } from "playlist-content";
import { MoviesContent } from "movies-content";

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: Playlist,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
