import * as React from "react";
import styled from "styled-components";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20%;
`;

const SBanner = styled.div`
  width: 275px;
  height: 100px;
  background: url(/assets/RNTD-Logo-white.jpg) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
