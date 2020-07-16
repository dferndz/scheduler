import React from "react";
import styled from "styled-components";
import GoogleNormal from "../../assets/google_signin_buttons/web/2x/btn_google_signin_dark_normal_web@2x.png";
import GoogleFocus from "../../assets/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png";
import GooglePressed from "../../assets/google_signin_buttons/web/2x/btn_google_signin_dark_pressed_web@2x.png";

const Wrapper = styled.div`
  button {
    background: url(${GoogleNormal});
    height: 92px;
    width: 382px;
    text-decoration: none;
    border: none;
    margin: 0px;
  }

  button: hover {
    background: url(${GoogleFocus});
  }

  button: active {
    background: url(${GooglePressed});
  }
`;

type Props = {
  onClick?: () => void;
};

const GoogleButton = (props: Props) => {
  return (
    <Wrapper>
      <button {...props}></button>
    </Wrapper>
  );
};

export default GoogleButton;
