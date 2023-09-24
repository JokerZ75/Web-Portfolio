import React from "react";
import { typeWriter } from "../../lib/utils/typing";
// @ts-expect-error
import me from "../../images/me2.png";
import { StaticImage } from "gatsby-plugin-image";

const Home: React.FC = () => {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const textRef2 = React.useRef<HTMLHeadingElement>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (textRef.current && textRef2.current && count === 0) {
      typeWriter(textRef.current, "Hi, I'm Deacon", 100);
      typeWriter(
        textRef2.current,
        "A Software Engineering Student studying at Sheffield Hallam University",
        50,
        1400
      );
      setCount(1);
    }
  }, [textRef]);

  return (
    <section id="Home">
      <div id="home-image-holder">
        <img id="home-image" src={me} alt="Image Of Deacon Hughes" />
      </div>
      <div className="">
        <p ref={textRef} className="code-font"></p>
        <br />
        <p ref={textRef2} className="code-font"></p>
      </div>
    </section>
  );
};

export default Home;
