import styled from "styled-components";

export const AuthenticatorRootStyled = styled.div`
  top: 160px;
  position: absolute;
  width: 320px;
  height: 495px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AuthenticatorInputsStyled = styled.div`
  margin-top: 40px;
`;

export const AuthenticatorTitleStyled = styled.div`
  margin: 0;
  padding: 0;

  h1 {
    color: var(--TextColor1);
    margin: 0;
    padding: 0;
    font-size: 36px;
    font-weight: 700;
    word-wrap: break-word;
  }

  p {
    color: var(--TextColor4);
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
  }
`;

export const AuthenticatorInputStyled = styled.div`
  background-color: transparent;
  border-bottom: 2px solid var(--TextColor3);
  height: 45px;
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    box-sizing: border-box;
    width: 320px;
    height: 100%;
    padding-left: 30px;
    font-size: 15px;
    font-weight: 700;
    word-wrap: break-word;
    color: var(--TextColor3);
  }

  input::placeholder {
    color: var(--TextColor3);
    font-size: 15px;
    font-weight: 500;
    word-wrap: break-word;
  }

  &:first-child {
    margin-top: 0px;
  }

  .Auth-Login-Input-Icon {
    position: absolute;
  }
`;
export const AuthenticatorVerifyStyled = styled.div`
  position: absolute;
  width: 320px;
  bottom: 0;

  button {
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 30px;
    background-color: var(--ButtonCyan);
    color: var(--TextColor1);
    font-size: 18px;
    font-weight: 700;
    word-wrap: break-word;
    cursor: pointer;
    transition: 0.2s;
  }

  button:disabled {
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 30px;
    background-color: var(--ButtonDisabled);
    color: var(--TextColor7);
    font-size: 18px;
    font-weight: 700;
    word-wrap: break-word;
    transition: 0.2s;
  }
  p {
    padding: 0;
    margin: 0;
    margin-top: 30px;
    color: var(--TextColor2);
    font-size: 16px;
    word-wrap: break-word;
  }
  p span {
    color: var(--TextColor4);
    word-wrap: break-word;
    cursor: pointer;
  }
`;

export const AuthenticatorUserStyled = styled.a`
  color: var(--TextColor4);
`;
