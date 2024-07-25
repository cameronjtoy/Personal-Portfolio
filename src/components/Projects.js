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
import vizier from "../assets/img/vizier.png";
import room8 from "../assets/img/room8.png";
import parallel from "../assets/img/parallel.png";
import stony from "../assets/img/stony.png";
import dfg from "../assets/img/dfg.png";

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
    title: "Product Space",
    description: "Product Space Website built with React and Bootstrap", 
    imgUrl: productspace,
},
{
    title: "Board",
    description: "Community based application to help people grow their community through data",
    imgUrl: comingsoon,
}
];

const schoolProjects = [
    {
        title: "Room8",
        description: "Room8 is a web application that allows users to split bills and keep track of expenses with their roommates.",
        imgUrl: room8,
    },
    {
        title: "Vizier",
        description: "Vizier is an data workbook that focuses on reproducibility and data workflow.",
        imgUrl: vizier,
    },
    {
        title: "Parallel Diffusion",
        description: "Parallel Diffusion is a project that focuses on parallel programming and diffusion algorithms.",
        imgUrl: parallel,
    }
];

const careerProjects = [
    {
        title: "Develop for Good",
        description: "Develop for Good is a non-profit organization that provides software development services to other non-profits.",
        imgUrl: dfg,
    },
    {
        title: "Stony Brook Adminstrative Services, LLC",
        description: "Stony Brook Administrative Services, LLC is a company that provides administrative services to small businesses.",
        imgUrl: stony,
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
                <Row>
                    {
                        schoolProjects.map((project, index) => {
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
                <Tab.Pane eventKey="third">
                <Row>
                    {
                        careerProjects.map((project, index) => {
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