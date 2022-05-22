import React from "react";
import { AppShell } from "ui";

import { MoviesContent } from "movies-content";
import { Playlist } from "playlist-content";
// @ts-ignore
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <MoviesContent />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: () => (
            <ErrorBoundary>
              <MoviesContentRuntime />
            </ErrorBoundary>
          ),
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
