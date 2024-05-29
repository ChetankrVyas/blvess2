import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Row, Col } from 'react-bootstrap';
import Lgo from '../assets/logo1.png'
import { FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa"
import { NavDropdown } from 'react-bootstrap';
import Image from 'next/image';

function Nav_bar() {
    return (
        <Navbar bg="green" variant='light' expand="lg" style={{ padding: '4px', }}>
            <Container>
                <Navbar.Brand style={{ width: '10%', marginRight: '10%' }} href="/"><Image src={Lgo} height={150} style={{ borderRadius: '50%', margin: 'auto'}} alt='' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Col>
                    <Row>
                        <div className='topic'>BHARATIYA LOK VIKAS EVAM SHODH SANSTHAN</div>
                    </Row>
                    <Row>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto nav-list">
                                <Nav.Link href="/"><span className='nav-item ulstyle'>Home</span></Nav.Link>
                                <Nav.Link href="/mission"><span className='nav-item ulstyle'>Missions</span></Nav.Link>
                                <Nav.Link href="/contract"><span className='nav-item ulstyle'>Contracts</span></Nav.Link>
                                <Nav.Link href="/activities"><span className='nav-item ulstyle'>Activities</span></Nav.Link>
                                <Nav.Link href="/partner"><span className='nav-item ulstyle'>Partners</span></Nav.Link>
                                <Nav.Link href="/about"><span className='nav-item ulstyle'>About</span></Nav.Link>
                            </Nav>
                            <div className='social'>
                                <a href=''><FaInstagram className="social-icons ins"></FaInstagram></a>
                                <a href=''><FaFacebook className="social-icons fac"></FaFacebook></a>
                                <a href=''><FaLinkedin className="social-icons lin"></FaLinkedin></a>
                            </div>
                        </Navbar.Collapse>
                            <hr style={{color:'black',height:'2px'}}></hr>
                    </Row>
                </Col>
            </Container>
        </Navbar>
    );
}

export default Nav_bar;