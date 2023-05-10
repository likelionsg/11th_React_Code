import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";

import { Main, MediaDiv } from "./styledComponents";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";

const App = () => {
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
            <Slogan />

            {/* Routing */}
            <Routes>
              <Route path="/" element={<div>메인 페이지</div>} />
              <Route path="/write" element={<div>글 작성 페이지</div>} />
              <Route path="/post/:postID" element={<div>글 상세 페이지</div>} />
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
