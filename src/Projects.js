import React from 'react'
import project1 from './Images/bank-management.png'
import project2 from './Images/ai-land.png'
import { Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'

export default function Projects() {
    return (
        <>

            <Home />

            <Container id='projects'>
                <div className='service mt-5'>
                    <div className='text-center'>
                        <p className='mb-1 what-i-do'>What I Did ?</p>
                        <p className='p-about'>Projects</p>
                    </div>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <div className="Container">
                                <img src={project1} className='img-fluid projects'></img>

                                <div class="overlay">
                                    <a href="https://bankmangement.web.app/"><div class="text">Bank-Management-Project</div></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mt-project'>
                            <div className="Container">
                                <img src={project2} className='img-fluid projects'></img>

                                <div class="overlay">
                                    <a href="https://ai-land-test.web.app"><div class="text">Ai-Land-Project</div></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Footer />


        </>
    )
}
