import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/Cameron_Toy_Resume_2024 (2).pdf";

export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const [index, setIndex] = useState(1);
const toRotate = [ "Web Developer", "Software Engineer", "Student" ];
const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
    tick();
    }, delta);

    return () => { clearInterval(ticker) };
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
    } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
    } else {
    setIndex(prevIndex => prevIndex + 1);
    }
}

return (
    <section className="banner" id="home">
    <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Cameron Toy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Engineer", "Student" ]'><span className="wrap">{text}</span></span></h1>
                <p>My journey as a computer science major has fueled my passion for developing innovative products that make a real impact. From an early interest in technology, I have always been fascinated by how software can solve problems and improve lives. This passion led me to pursue a degree in computer science, where I delved into various subjects such as data structures, algorithms, and web development. My coursework provided a strong foundation in problem-solving and computer science principles, while hands-on projects allowed me to explore backend technologies like Go and a MERN stack (MongoDB, Express, React, Node.js) to create user-friendly and efficient software solutions, further enhancing my ability to develop and deploy robust web applications.</p>

                <p>Beyond academics, my practical experiences have solidified my love for product development. As a Research Assistant at the University at Buffalo, I worked on optimizing data visualization modules and developing innovative tools with Apache Spark and Scala. These projects taught me the importance of designing scalable and efficient systems. Additionally, my involvement in various hackathons and volunteer work as a software engineer provided opportunities to pitch ideas and work closely with clients, further honing my skills in creating impactful products. I am eager to continue this journey, leveraging my skills and passion to develop cutting-edge software solutions that address real-world challenges.</p>
                <a href= {resume}>
                <div className = 'resume-button'>Resume</div>
                <ArrowRightCircle size={25} />
                </a>
            </div>}
            </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={logo} alt="Header Img" className="banner_logo"/>
                </div>}
            </TrackVisibility>
        </Col>
        </Row>
    </Container>
    </section>
)
}