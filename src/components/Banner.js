import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "Team Leader",
    "App Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to Shahin.pro</span>
                  <h1
                    style={{
                      height: "max-content",
                    }}
                  >
                    {`Hi! I'm Shahin`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "Team Leder" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hello, I'm Shahin Alam. I'm 17 years old. I study
                    <a
                      href="https://goo.gl/maps/d1watpXJPZHRWcwg9"
                      target="_blank"
                    >
                      {" "}
                      Bamoin High School and College.
                    </a>
                    I'm a Full Stack Web Application Developer and have great
                    experience in MERN-Stack development. I build high-end,
                    user-friendly, responsive websites and maintain all the
                    following parts like Security, Performance, User friendly,
                    Bug-free (security + frontend view), Proper maintainability
                    code, etc. Always eager to adopt new technologies to become
                    a High-level programmer.
                    <strong>• Expertise :</strong>{" "}
                    <span>
                      HTML5, CSS3, React.js, JavaScript, ES6, Bootstrap,
                      Material UI, firebase, and Rest API.
                    </span>{" "}
                    <br />
                    <strong> • Comfortable:</strong>{" "}
                    <span>
                      Node.js, Express.js, React Native, MongoDB, Next.js,
                      VueJs, etc
                    </span>{" "}
                    <br />
                    <strong>• Tools:</strong>{" "}
                    <span>
                      Github, VS Code, Chrome Dev tool, Heroku, Netlify, etc
                    </span>
                  </p>
                  {/* <HashLink to="#connect"> */}
                  <button
                    onClick={() => {
                      window.open("http://github.com/shahinadev", "_blank");
                    }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  {/* </HashLink> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
