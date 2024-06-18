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
                <p>As a computer science major with a strong interest in data and distributed systems, I've had the opportunity to work on several projects that have honed my skills in application development. One of my key projects, Board, is a community modular application that I designed to enhance user interaction and connectivity.</p>
                <p>My research experience as a Research Assistant at the University at Buffalo involved developing ETL modules for data visualization and optimizing render time by 25%. I also innovated a data profiler using Apache Spark and Scala, which significantly improved data handling efficiency.</p>
                <p>Currently, I am working with Linens N Love through Develop for Good, where I utilize MongoDB and Django to create web applications that connect hotels with shelters in need of linens. This project is built using the MERN stack, allowing me to leverage my knowledge in both front-end and back-end technologies to develop scalable and efficient systems.</p>
                <p>These experiences have solidified my passion for data and distributed systems, and I am eager to continue applying my skills to develop innovative solutions in the software engineering field.</p>
                <button onClick={() => window.open("../assets/Cameron_Toy_Resume_2024_Masters.pdf", '_blank')}>
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