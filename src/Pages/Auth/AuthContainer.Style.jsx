import styled from "styled-components";

export const AuthContainer = styled.div`
  position: absolute;
  background-color: var(--BgColor1);
  box-shadow: 0px 7px 10px var(--ShadowB25);
  border-radius: 25px;
  width: 400px;
  height: 680px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const AuthContainerLogoDiv = styled.div`
  position: absolute;
  background-color: var(--BgColor2);
  border-radius: 25px 25px 65px 65px;
  width: 400px;
  height: 140px;
  overflow: hidden;
  z-index: 2;
  transition: 0.8s;
`;

export const AuthContainerLogoImg = styled.img`
  width: 240px;
  height: 240px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.8s;
`;
