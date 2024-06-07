import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { HiXMark } from "react-icons/hi2";
import ConnectForm from "../features/connect/ConnectForm";
import { useContext } from "react";
import { ConnectContext as ConnectWindowContext } from "./HeaderNav";

const Overlay = styled.div.attrs({
  className: "connect-window-overlay",
})`
  background-color: rgb(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 101; // displays over the mobile nav button

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  transition: all 0.5s ease-in;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
`;

const CTABox = styled.div`
  padding: 2.4rem 3.2rem 3.2rem 3.2rem;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);

  @media (max-width: 65em) {
    order: 1;
  }

  @media (max-width: 49em) {
    height: 50vh;
    overflow: scroll;
  }

  @media (max-width: 27em) {
    padding: 2.4rem 3.2rem;
  }

  @media (max-width: 27em) {
    padding: 2.4rem;
  }

  @media (max-width: 20em) {
    padding: 2rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  border-radius: 50%;
  background-color: rgb(253, 126, 20, 0.35);

  &:hover {
    background-color: rgb(253, 126, 20, 0.2);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-orange-50);
    border-radius: var(--border-radius-sm);
  }
`;

const StyledModal = styled.div`
  position: fixed;
  /* top: 50%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
  overflow: hidden;
  display: flex;
  width: 75%;

  @media (max-width: 90em) {
    display: flex;
    width: 85%;
  }

  @media (max-width: 65em) {
    /* top: 610px; */
    /* left: 515px; */
    /* top: 130%; */
    flex-direction: column;
    width: 90%;
  }
`;

const ImgBox = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(235, 151, 78, 0.349),
      rgba(230, 126, 34, 0.349)
    ),
    url("/form-img.jpeg");
  background-position: center;
  background-size: cover;
  width: 100%;

  @media (max-width: 65em) {
    order: 0;
    height: 45rem;
    background-position: top;
    background-image: linear-gradient(
        to right bottom,
        rgba(235, 151, 78, 0.349),
        rgba(230, 126, 34, 0.349)
      ),
      url("/cta-img2.jpg");
  }

  @media (max-width: 27em) {
    background-image: linear-gradient(
        to right bottom,
        rgba(235, 151, 78, 0.349),
        rgba(230, 126, 34, 0.349)
      ),
      url("/form-img.jpeg");
  }

  @media (max-width: 20em) {
    height: 35rem;
  }
`;

function ConnectWindow() {
  const { setIsOpen } = useContext(ConnectWindowContext);
  function handleClick() {
    setIsOpen(false);
  }

  const ref = useOutsideClick(handleClick);

  return (
    <Overlay>
      <StyledModal ref={ref}>
        <CTABox>
          <Button onClick={handleClick}>
            <HiXMark />
          </Button>

          <ConnectForm />
        </CTABox>
        <ImgBox></ImgBox>
      </StyledModal>
    </Overlay>
  );
}

export default ConnectWindow;
