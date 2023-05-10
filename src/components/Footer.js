import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FooterDiv, FooterBig, FooterSmall } from "../styledComponents";

const Footer = () => {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2023. by LIKELIONSG</FooterSmall>
    </FooterDiv>
  );
};

export default Footer;
