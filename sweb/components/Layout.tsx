import React, { ReactNode } from "react";
import { styled } from "../styles/stitches.config";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Section>
      <Wrapper>{children}</Wrapper>
    </Section>
  );
};

const Section = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
});

const Wrapper = styled("div", {
  display: "flex",
  maxWidth: 1100,
  minHeight: "calc(100vh)",
});

export default Layout;
