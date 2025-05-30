import { cloneElement, createContext, useContext, useEffect } from "react";
import { OpenWindowContext as HeaderOpenWindowContext } from "./Header";
import { OpenWindowContext as WorkLayoutOpenWindowContext } from "../features/work/WorkLayout";
import { ConnectContext as ConnectWindowContext } from "./HeaderNav";
import { createPortal } from "react-dom";

const SlidingWindowContext = createContext();

function SlidingWindow({ children }) {
  return (
    <SlidingWindowContext.Provider value={{}}>
      {children}
    </SlidingWindowContext.Provider>
  );
}

function Open({ children, opens: opensName }) {
  let OpenWindowContext;
  if (opensName === "mobile-nav") OpenWindowContext = HeaderOpenWindowContext;
  if (opensName === "sidebar-nav")
    OpenWindowContext = WorkLayoutOpenWindowContext;
  if (opensName === "connect-window") OpenWindowContext = ConnectWindowContext;

  const { isOpen, setIsOpen, className } = useContext(OpenWindowContext);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(
    function () {
      if (isOpen) {
        document.body.classList.add(className);
      } else document.body.classList.remove(className);
    },
    [isOpen, className]
  );

  if (!children) return null;

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children }) {
  return createPortal(cloneElement(children), document.body);
}

SlidingWindow.Open = Open;
SlidingWindow.Window = Window;
export default SlidingWindow;
