import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { createContext, useEffect, useState } from "react";

import SlidingWindow from "../../ui/SlidingWindow";
import MovableSideBar from "./MoavableSideBar";
import SideBarNavButton from "./SideBarNavButton";

const StyledWorkLayout = styled.div.attrs({ className: "work-layout" })`
  display: grid;
  grid-template-columns: 30rem 1fr;
  height: 100vh;

  @media (max-width: 65rem) {
    display: flex;
    flex-direction: column;
  }
`;

const SideBarNavButtonBox = styled.div.attrs({
  className: "sidebar-nav-button-box",
})`
  display: none;

  @media (max-width: 65rem) {
    display: block;
    background-color: var(--color-grey-50);
    padding: 1.6rem 0;
  }

  @media (max-width: 27em) {
    padding: 1.2rem 0;
  }
`;

const MainDiv = styled.div`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem;
  overflow-y: scroll;

  @media (max-width: 65rem) {
    padding: 2.4rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const OpenWindowContext = createContext();

function WorkLayout() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(function () {
  //   setTimeout(
  //     () => document.getElementById("root").classList.remove("sticky"),
  //     5
  //   );
  // }, []);

  return (
    <>
      <OpenWindowContext.Provider
        value={{
          isOpen,
          setIsOpen,
          className: "sidebar-open",
        }}
      >
        <StyledWorkLayout>
          <SideBar />

          <SlidingWindow>
            <SlidingWindow.Open opens="sidebar-nav">
              <SideBarNavButtonBox>
                <SideBarNavButton>
                  <CgMenuGridR
                    className="icon-sidebar-nav"
                    name="menu-outline"
                  />
                </SideBarNavButton>
              </SideBarNavButtonBox>
            </SlidingWindow.Open>
            <SlidingWindow.Window name="sidebar-nav">
              <MovableSideBar />
            </SlidingWindow.Window>
          </SlidingWindow>

          <MainDiv>
            <Container>
              <Outlet />
            </Container>
          </MainDiv>
        </StyledWorkLayout>
      </OpenWindowContext.Provider>
    </>
  );
}

export default WorkLayout;
export { OpenWindowContext };
