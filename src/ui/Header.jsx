import styled from "styled-components";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import { HiXMark } from "react-icons/hi2";

import "../styles/mobile-nav.css";
import { TfiMenuAlt } from "react-icons/tfi";
import MobileNav from "./MobileNav";
import { createContext, useState } from "react";
import SlidingWindow from "./SlidingWindow";

const StyledHeader = styled.header.attrs({
  className: "header",
  id: "header",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 4.8rem;

  @media (max-width: 65em) {
    padding: 2rem 4rem;
  }

  @media (max-width: 49em) {
    padding: 2rem 3.2rem;
  }

  @media (max-width: 24em) {
    padding: 2rem 2.4rem;
  }
`;

const ButtonMobielNav = styled.button`
  display: none;

  @media (max-width: 49em) {
    border: none;
    background: none;
    cursor: pointer;
    display: block;
    z-index: 101;
  }
`;

const OpenWindowContext = createContext();

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenWindowContext.Provider
      value={{
        isOpen,
        setIsOpen,
        className: "nav-open",
      }}
    >
      <StyledHeader>
        <Logo />
        <HeaderNav />

        <SlidingWindow>
          <SlidingWindow.Open opens="mobile-nav">
            <ButtonMobielNav>
              {!isOpen && (
                <TfiMenuAlt className="icon-mobile-nav" name="menu-outline" />
              )}
              {isOpen && (
                <HiXMark className="icon-mobile-nav" name="close-outline" />
              )}
            </ButtonMobielNav>
          </SlidingWindow.Open>
          <SlidingWindow.Window name="mobile-nav">
            <MobileNav />
          </SlidingWindow.Window>
        </SlidingWindow>
      </StyledHeader>
    </OpenWindowContext.Provider>
  );
}

export default Header;
export { OpenWindowContext };
