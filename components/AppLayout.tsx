import React from "react";

import styled from "styled-components";

import Header from "./Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header />
      <Contents>{children}</Contents>
    </div>
  );
}

export default AppLayout;

const Contents = styled.div`
  position: relative;
  height: calc(100vh - var(--headerHeight));
  padding-top: var(--headerHeight);
  overflow-y: auto;
`;
