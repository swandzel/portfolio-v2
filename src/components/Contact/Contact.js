import "./Contact.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import EmailIcon from "../../assets/icons/icon-email.svg";
import Button from "../Button/Button";
import MessageLeftIcon from "../../assets/icons/icon-message-left.svg";
import MessageRightIcon from "../../assets/icons/icon-message-right.svg";
import { motion } from "framer-motion";
import useParallax from "../../variables/useParallax";

const Contact = () => {
  const { left, right, ref, projectsScale } = useParallax();

  // const [elementTop, setElementTop] = useState(0);
  // const [clientHeight, setClientHeight] = useState(0);
  // const ref = useRef(null);

  // const initial = elementTop - clientHeight;
  // const final = elementTop + 50;

  // useLayoutEffect(() => {
  //   const element = ref.current;
  //   const onResize = () => {
  //     setElementTop(
  //       element.getBoundingClientRect().top + window.scrollY ||
  //         window.pageYOffset
  //     );
  //     setClientHeight(window.innerHeight);
  //   };
  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, [ref]);

  // const { scrollY } = useViewportScroll();
  // const left = useTransform(scrollY, [initial, final], ["150px", "0px"]);
  // const right = useTransform(
  //   scrollY,
  //   [initial + 100, final],
  //   ["-150px", "0px"]
  // );

  return (
    <div className="contact" id="contact" ref={ref}>
      <motion.div
        style={{
          scale: projectsScale,
        }}
        className="contact--content"
      >
        <SectionTitle
          icon={EmailIcon}
          title="Email Me"
          subtitle="Want to hire me?"
          shadowColor="#C4C4C4"
          titleColor="#DD7DFF"
          subtitleColor="#C4C4C4"
        />
        <motion.img
          src={MessageLeftIcon}
          alt="Icon #1"
          className="contact--icons left"
          style={{
            y: left,
          }}
        />
        <motion.img
          src={MessageRightIcon}
          alt="Icon #2"
          className="contact--icons right"
          style={{
            y: right,
          }}
        />
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <Button text="Send" />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
