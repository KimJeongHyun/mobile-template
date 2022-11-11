import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import { useHeadStore } from "@/globalStore/index";

const headName: {
  [name: string]: string;
} = {
  "/": "메인",
  "/test": "테스트",
};

function Header() {
  const router = useRouter();

  const [
    text,
    isValidBackButton,
    isValidCloseButton,
    updateText,
    updateValidateBack,
  ] = useHeadStore((state) => [
    state.text,
    state.isValidBackButton,
    state.isValidCloseButton,
    state.updateText,
    state.updateValidateBack,
  ]);

  const goBack = () => {
    router.back();
  };

  const closeApp = () => {
    window.close();
  };

  useEffect(() => {
    updateText(headName[`${router.pathname.toLowerCase()}`]);
    updateValidateBack(router.pathname !== "/");
  }, [router.pathname, updateText, updateValidateBack]);

  return (
    <>
      <HeaderContainer>
        <HeadArea>
          {
            <ButtonBlock onClick={goBack}>
              {isValidBackButton && `<-`}
            </ButtonBlock>
          }
          <HeadText>{text}</HeadText>
          <ButtonBlock onClick={closeApp}>
            {isValidCloseButton && "X"}
          </ButtonBlock>
        </HeadArea>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: var(--headerHeight);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: inherit;
  z-index: 1;
`;

const HeadArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24em;
  gap: 2em;
  padding: 0 1em;
`;

const HeadText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonBlock = styled.button`
  cursor: pointer;
  height: 100%;
`;
