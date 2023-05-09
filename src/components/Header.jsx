import React from "react";

// styled-components
import { HeaderDiv, SubHeaderDiv } from "../styledComponent";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import HeaderTitle from "./HeaderTitle";

import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
    // window.location.replace('/')
  };

  return (
    <HeaderDiv>
      {/* React.memo 메모이제이션 */}
      <HeaderTitle goHome={goHome} />

      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
};

export default Header;
