import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";

// Routing
import { Route, Routes } from "react-router-dom";

// styled-components
import { Main, MediaDiv } from "./styledComponents";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowPostList from "./components/ShowPostList";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";
import Slogan from "./components/Slogan";

export const APIURL = process.env.REACT_APP_APIURL;

const App = () => {
  // 다크모드
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />

        <MediaDiv>
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* MAIN */}
          <Main>
            {/* React.memo 메모이제이션 */}
            <Slogan />

            {/* Routing */}
            <Routes>
              <Route path="/" element={<ShowPostList />} />
              <Route path="/write" element={<WritePost />} />
              <Route path="/post/:postID" element={<ShowPost />} />
            </Routes>
          </Main>
        </MediaDiv>
      </ThemeProvider>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
