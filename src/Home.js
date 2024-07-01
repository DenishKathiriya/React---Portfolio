
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {


    const navigate = useNavigate()

    const GoToLink = () => {
        navigate("/about")
    }


    return (

        <>


            <Navbar expand="lg" fixed='top' id='nav-fix-scrol'>
                <Container>
                    <Navbar.Brand href="#home" className='clr-Name'>Denish</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link onClick={() => navigate("/")} className='clr-white'>Home</Nav.Link>
                            <Nav.Link onClick={GoToLink} className='clr-white'>About</Nav.Link>
                            <Nav.Link onClick={() => navigate("/service")} className='clr-white'>Service</Nav.Link>
                            <Nav.Link onClick={() => navigate("/projects")} className='clr-white'>Projects</Nav.Link>
                            <Nav.Link onClick={() => navigate("/contact")} className='clr-white'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='bg-img'>
                <Container className='positions'>
                    <div>
                        <p className='h1-heading'>Hi!</p>
                        <p className='h1-heading'>I AM Denish Kathiriya</p>
                        <p className='front-end'>Full-Stack Developer</p>

                        {/* <Button variant="outline-primary btn-clr" id='projects'>Visit My Works</Button>{' '} */}

                    </div>
                </Container>

            </div>


        </>
    )
}
