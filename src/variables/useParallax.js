import { useTransform, useViewportScroll } from "framer-motion";
import { useLayoutEffect, useState, useRef } from "react";

const useParallax = ({ ref }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const initial = elementTop - clientHeight;
  const final = elementTop + 50;

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
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

  return {
    left,
    right,
    ref,
  };
};

export default useParallax;
