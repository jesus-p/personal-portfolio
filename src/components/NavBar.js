import { useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";// Add NavDropdown if that feature is uncommentted

import logo from "../assets/img/jesus-perez-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
    // Managing what link you are own at the moment. Intially at home
    const[activeLink, setActiveLink] = useState('home');
    
    // Manages wether or not the user has scrolled. Initial state false
    const[scrolled, setScrolled] = useState(false);

    // Effect will change the navbar to not be transparent after scrolling
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
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
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                {/* For the brand we can either have a name or an image, I'm choosing to have an image */}
                <Navbar.Brand href="/">
                    {/* Add this image in later */}
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                {/* When images are minimized on mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <span className="navbar-toggler-icon"></span>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        {/* This is for the dropdown menu, currently not using it
                            <NavDropdown title="Dropdown" id= "basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>                            
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <span className="navbar-text">
                        {/* For three social media links */}
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        {/* Button that is for the contact us form */}
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}