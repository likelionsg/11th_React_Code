import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";

import { Main, MediaDiv } from "./styledComponent";

import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Slogun from "./components/Slogun";
import Footer from "./components/Footer";
import ShowPostList from "./components/ShowPostList";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";
import Ref from "./Ref";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />

        <MediaDiv>
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main */}
          <Main>
            <Slogun />

            {/* Routing */}
            <Routes>
              <Route path="/" element={<ShowPostList />} />
              <Route path="/write" element={<WritePost />} />
              <Route path="/post/:postID" element={<ShowPost />} />

              <Route path="/ref" element={<Ref />} />
            </Routes>
          </Main>
        </MediaDiv>
      </ThemeProvider>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
