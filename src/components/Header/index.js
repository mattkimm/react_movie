import React from "react";
import RMDBLogo from "../../images/reat-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_lgo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      <TMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>;
};

export default Header;
