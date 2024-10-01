import styled from "styled-components";

export const MotionDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const HomeButton = styled.p`
  position: absolute;
  left: 60px;
  bottom: 30px;
  font-size: 22px;
  color: var(--TextColor6);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--TextColor1);
  }
`;

export const LogoHome = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const TitleText = styled.h1`
  color: var(--TextColor3);
  font-size: 26px;
  text-align: left;
  margin: 0;
  position: absolute;
  top: 60px;
  left: 60px;
  span {
    color: var(--TextColor1);

    font-size: 46px;
  }
`;
