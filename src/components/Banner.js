import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
                <p>As a computer science major with a passion for software engineering, I have had the opportunity to study various topics that have prepared me for a career in this field. My studies have focused on data structures and algorithms, providing me with a strong foundation in problem-solving and computer science concepts. In addition, I have also taken a course in web development, with a focus on backend technologies.</p>
                <p>In my web development course, I have learned about the various technologies and frameworks used to build and maintain modern web applications. Through hands-on projects, I have gained experience in backend technologies such as servers, databases, and server-side programming languages like Python. I have also learned about front-end technologies like HTML, CSS, and JavaScript (React, Express), which are used to create user-friendly and responsive websites. </p>
                <p>My studies in artificial intelligence have included a course in reinforcement learning, where I have learned about AI algorithms and their applications. This course has allowed me to work with real-world data and build models to make decisions and adapt to changing environments.</p>
                <p>Overall, my coursework has given me a well-rounded education in computer science and has prepared me for a career as a software engineer. I am eager to apply my skills and knowledge to develop innovative and practical solutions for various problems.</p>
                <button onClick={() => window.open("../assets/Cameron_ToyResume2022_.pdf", '_blank')}>
                Resume
                <ArrowRightCircle size={25} />
                </button>

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