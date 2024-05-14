import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "../styles/form.css";
import Modal from "./Modal";
import ConnectForm from "../features/connect/ConnectForm";
import Button from "./Button";
import { useContext } from "react";
import { OpenWindowContext as HeaderOpenWindowContext } from "./Header";
import HeaderNavStyledNavLink from "./HeaderNavStyledNavLink";

const StyledList = styled.ul.attrs({
  className: "mobile-nav",
})`
  display: none;

  @media (max-width: 49em) {
    list-style: none;

    background-color: rgb(255, 255, 255, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
    transition: all 0.5s ease-in;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

function MobileNav() {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/home#");
    setIsOpen(false);
  }

  function handleAboutClick() {
    navigate("/home#about");
    setIsOpen(false);
  }

  function handleWorkClick() {
    navigate("/work");
    setIsOpen(false);
  }

  function handleClick() {
    setIsOpen(false);
  }

  const { setIsOpen } = useContext(HeaderOpenWindowContext);

  return (
    <StyledList>
      <li>
        <a className="scroll-link" onClick={handleHomeClick} href="#">
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
      <li>
        <HeaderNavStyledNavLink
          onClick={handleClick}
          target="_blank"
          to="https://drive.google.com/file/d/1AHAoyzFIOl0fz5CWugxpJiZzLhN8NakQ/view?usp=drive_link"
        >
          Resume
        </HeaderNavStyledNavLink>
      </li>
    </StyledList>
  );
}

export default MobileNav;
