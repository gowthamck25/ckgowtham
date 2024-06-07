import { cloneElement, createContext, useContext, useEffect } from "react";
import { OpenWindowContext as HeaderOpenWindowContext } from "./Header";
import { OpenWindowContext as WorkLayoutOpenWindowContext } from "../features/work/WorkLayout";

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

  const { isOpen, setIsOpen, parentClass, additionalParentClass } =
    useContext(OpenWindowContext);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(
    function () {
      if (isOpen) {
        document
          .querySelector(parentClass)
          .classList.add(additionalParentClass);
      } else
        document
          .querySelector(parentClass)
          .classList.remove(additionalParentClass);
    },
    [isOpen, additionalParentClass, parentClass]
  );

  if (!children) return null;

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children }) {
  return cloneElement(children);
}

SlidingWindow.Open = Open;
SlidingWindow.Window = Window;
export default SlidingWindow;
