import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import checkers from "../assets/img/checkers.jpeg";
import market from "../assets/img/market.jpeg";
import logo from "../assets/img/logo.png";
import comingsoon from "../assets/img/comingsoon.jpeg";
import productspace from "../assets/img/productspace.png";
import chess from "../assets/img/chess.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
{
    title: "Checkers AI",
    description: "Artificial Intelligence Project using Minimax and Alpha Beta Pruning Algorithms in Python",
    imgUrl: checkers,
},
{
    title: "UniMarket",
    description: "Full-Stack Web Application using MERN Stack", 
    imgUrl: market,
},
{
    title: "Personal Website",
    description: "Personal Website built with React and Bootstrap",
    imgUrl: logo,
},
{
    title: "Chess Engine",
    description: "Artificial Intelligence Project using Minimax and Alpha Beta Pruning Algorithms in Java",
    imgUrl: chess,
},
{
    title: "Product Space (Coming Soon)",
    description: "Product Space Website built with React and Bootstrap", 
    imgUrl: productspace,
},
{
    title: "Carrer AIO (Coming Soon)",
    description: "Full Stack Web Application using MERN Stack and Bootstrap for UI Design and React for Frontend Development and Node.js for Backend Development and MongoDB for Database.",
    imgUrl: comingsoon,
}
];

return (
<section className="project" id="projects">
    <Container>
    <Row>
        <Col size={12}>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>I have completed a number of projects as part of my training as a software engineer, including building web applications and websites, as well as working on smaller programming tasks. Some examples of my projects include a Checkers AI that uses minimax and alpha beta pruning algorithms, a central e-commerce website built with a MERN stack called UniMarket, and a personal website built with React and Bootstrap. These projects have allowed me to develop my skills in a variety of areas, including artificial intelligence, full-stack web development, and user experience design. I have gained valuable experience working on real-world problems and delivering practical solutions, and have learned how to work effectively both independently and as part of a team. Overall, my projects have been an important part of my development as a software engineer, and have helped me to become well-rounded and confident in my abilities.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">School Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Career</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                    <Row>
                    {
                        projects.map((project, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                        })
                    }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p></p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p></p>
                </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </div>}
        </TrackVisibility>
        </Col>
    </Row>
    </Container>
    {/* <img className="background-image-right" src={colorSharp2}></img> */}
</section>
)
}