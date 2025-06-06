import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "../styles/form.css";
import Modal from "./Modal";
import ConnectForm from "../features/connect/ConnectForm";
import Button from "./Button";
import HeaderNavStyledNavLink from "./HeaderNavStyledNavLink";
import { createContext, useEffect, useState } from "react";
import SlidingWindow from "./SlidingWindow";
import ConnectWindow from "./ConnectWindow";

const StyledList = styled.ul.attrs({ className: "nav-ul" })`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 65em) {
    gap: 4.8rem;
  }

  @media (max-width: 49em) {
    display: none;
  }
`;

const ConnectContext = createContext();

function HeaderNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  useEffect(function () {
    function handleClick(e) {
      document.querySelectorAll(".scroll-link").forEach((link) => {
        console.log(link);
        link.classList.remove("active");
      });
      e.target.classList.contains("scroll-link") &&
        e.target.classList.add("active");
    }

    document.querySelector(".nav-ul").addEventListener("click", handleClick);
  }, []);

  function handleHomeClick() {
    navigate("/home#");
  }

  function handleAboutClick() {
    navigate("/home#about");
  }

  function handleWorkClick() {
    navigate("/work");
  }

  return (
    <StyledList>
      <li>
        <a onClick={handleHomeClick} className="scroll-link active" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="scroll-link" onClick={handleAboutClick} href="#about">
          About
        </a>
      </li>
      <li>
        <a className="scroll-link" onClick={handleWorkClick} href="#">
          Work
        </a>
      </li>
      <li className="modal-form-nav-link">
        <Modal>
          <Modal.Open opens="connect-form">
            <Button variation="link" size="extraSmall">
              Connect
            </Button>
          </Modal.Open>
          <Modal.Window name="connect-form" imgDetails={true}>
            <ConnectForm />
          </Modal.Window>
        </Modal>
      </li>
      {/* <li className="connect-window-li">
        <ConnectContext.Provider
          value={{
            isOpen,
            setIsOpen,
            className: "connect-window-open",
          }}
        >
          <SlidingWindow>
            <SlidingWindow.Open opens="connect-window">
              <Button variation="link" size="extraSmall">
                Open Connect Window
              </Button>
            </SlidingWindow.Open>
            <SlidingWindow.Window name="connect-window">
              <ConnectWindow />
            </SlidingWindow.Window>
          </SlidingWindow>
        </ConnectContext.Provider>
      </li> */}
      <li>
        <HeaderNavStyledNavLink
          target="_blank"
          to="https://drive.google.com/file/d/1KTUjunosuBi9_PV9NF5rcqiUncZDXim5/view"
        >
          Resume
        </HeaderNavStyledNavLink>
      </li>
    </StyledList>
  );
}

export default HeaderNav;
export { ConnectContext };
