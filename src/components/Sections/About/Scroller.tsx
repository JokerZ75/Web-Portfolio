import React from "react";
import { ReactNode } from "react";
import Button from "../../UI/Button";

interface ScrollerProps {
  children: ReactNode;
}

const Scroller: React.FC<ScrollerProps> = ({ children }) => {
  const scrollersRef = React.useRef<{
    OuterScroller: HTMLDivElement | null;
    InnerScroller: HTMLUListElement | null;
  }>({
    OuterScroller: null,
    InnerScroller: null,
  });
  const [animated, setAnimated] = React.useState(false);

  function addAnimation(scroller: HTMLElement | null) {
    setAnimated(true);
    scroller?.setAttribute("data-animated", "true");
    if (scroller?.classList.contains("scroller__inner")) {
      const scrollerContent = Array.from(scroller?.children);
      scrollerContent.forEach((element, index) => {
        const duplicate = element.cloneNode(true) as HTMLElement;
        duplicate.setAttribute("aria-hidden", "true");
        scroller?.appendChild(duplicate);
      });
    }
  }

  function removeAnimation(scroller: HTMLElement | null) {
    setAnimated(false);
    if (scroller?.getAttribute("data-animated") !== "false") {
      scroller?.setAttribute("data-animated", "false");
      if (scroller?.classList.contains("scroller__inner")) {
        const scrollerContent = Array.from(scroller?.children);
        scrollerContent.forEach((element, index) => {
          if (index >= scrollerContent.length / 2) {
            scroller?.removeChild(element);
          }
        });
      }
    }
  }

  React.useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
      addAnimation(scrollersRef.current.OuterScroller);
      addAnimation(scrollersRef.current.InnerScroller);
    }
  }, [scrollersRef]);

  return (
    <div
      className="scroller"
      ref={(ref) => {
        scrollersRef.current.OuterScroller = ref;
      }}
    >
      <ul
        className="tag-list scroller__inner"
        ref={(ref) => {
          scrollersRef.current.InnerScroller = ref;
        }}
      >
        {children}
      </ul>
      {animated ? (
        <Button
          onClick={() => {
            removeAnimation(scrollersRef.current.OuterScroller);
            removeAnimation(scrollersRef.current.InnerScroller);
          }}
        >
          View as List
        </Button>
      ) : (
        <Button
          onClick={() => {
            addAnimation(scrollersRef.current.OuterScroller);
            addAnimation(scrollersRef.current.InnerScroller);
          }}
        >
          Animate
        </Button>
      )}
    </div>
  );
};

export default Scroller;
