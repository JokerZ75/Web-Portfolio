import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";
import { typeWriter } from "../lib/utils/typing";
import Header from "../components/Header";
import Home from "../components/Sections/Home";
import About from "../components/Sections/About/About";
import Projects from "../components/Sections/Projects/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (textRef.current && count === 0) {
      typeWriter(textRef.current, "Hello World", 150);
      typeWriter(
        document?.getElementById("text2") as HTMLElement,
        "Hello World",
        100
      );

      setCount(1);
    }
  }, [textRef]);

  return (
    <>
      <Header />
      <main className="">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Deacon Hughes Dev</title>;
