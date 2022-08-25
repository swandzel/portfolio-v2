import { useTransform, useViewportScroll } from "framer-motion";
import { useLayoutEffect, useState, useRef } from "react";

const useParallax = () => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  const initial = elementTop - clientHeight;
  const final = elementTop + 50;

  const ref = useRef(null);
  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
      setClientWidth(window.innerWidth);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  const { scrollY } = useViewportScroll();
  const left = useTransform(scrollY, [initial, final], ["150px", "0px"]);
  const right = useTransform(
    scrollY,
    [initial + 100, final],
    ["-150px", "0px"]
  );
  const brackets = useTransform(scrollY, [0, 500], ["100px", "0px"]);
  const laptop = useTransform(scrollY, [0, 500], ["0px", "100px"]);
  const text = useTransform(scrollY, [0, 500], ["0px", "250px"]);
  const technologiesScale = useTransform(
    scrollY,
    [initial, final - 50, 5000],
    [0.5, 1, clientWidth > 900 ? 2 : 1]
  );
  const aboutToRight = useTransform(
    scrollY,
    [initial, final, 5000],
    [
      clientWidth > 900 ? "-180vw" : "0",
      "0px",
      clientWidth > 900 ? "30vw" : "0",
    ]
  );
  const projectsTitle = useTransform(
    scrollY,
    [initial, final - 350, 6000],
    [0.8, 1, 0.8]
  );
  const projectsScale = useTransform(
    scrollY,
    [initial, final - 280, 6000],
    [0.8, 1, clientWidth > 500 ? 0.8 : 1]
  );
  const contactScale = useTransform(scrollY, [initial, final - 350], [0.5, 1]);

  return {
    left,
    right,
    ref,
    brackets,
    laptop,
    text,
    technologiesScale,
    aboutToRight,
    projectsScale,
    contactScale,
    projectsTitle,
    clientWidth,
  };
};

export default useParallax;
