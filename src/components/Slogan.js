import React from "react";

import { SloganSection, SloganBig, SloganSmall } from "../styledComponents";

const Slogan = () => {
  return (
    <SloganSection>
      <SloganBig>HACK YOUR LIFE</SloganBig>
      <SloganSmall>내 아이디어를 내 손으로 실현한다.</SloganSmall>
    </SloganSection>
  );
};

export default React.memo(Slogan);
