import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.png';
import instagram from '../assets/img/instagram.gif';
import github from '../assets/img/github.gif';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
    if (window.scrollY > 100) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

return (
    <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/cameronjtoy"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/cameron-toy-424732183/"><img src={linkedin} alt="" /></a>
                <a href="https://www.instagram.com/cameronjtoy/"><img src={instagram} alt="" /></a>
            </div>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </Router>
)
}