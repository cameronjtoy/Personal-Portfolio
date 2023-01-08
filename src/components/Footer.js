import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/linkedin.png";
import instagram from "../assets/img/instagram.gif";
import github from "../assets/img/github.gif";

export const Footer = () => {
    return (
    <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <Col size={12} sm={6}>
            <img src={logo} alt="Logo"/>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/cameronjtoy"><img src={github} alt="Icon" /></a>
                <a href="https://www.linkedin.com/in/cameron-toy-424732183/"><img src={linkedin} alt="Icon" /></a>
                <a href="https://www.instagram.com/cameronjtoy/"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            </Col>
        </Row>
        </Container>
    </footer>
    )
    }