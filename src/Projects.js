import React from 'react'
import project1 from './Images/human-use-smartphone-online-banking-600nw-2306202875.webp'
import project2 from './Images/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'

export default function Projects() {
    return (
        <>

            <Home />

            <Container id='projects'>
                <div className='service mt-5 mb-5'>
                    <div className='text-center'>
                        <p className='mb-1 what-i-do'>What I Did ?</p>
                        <p className='p-about'>Projects</p>
                    </div>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <div className="Container">
                                <img src={project1} className='imagefuid projects'></img>

                                <div class="overlay">
                                    <a href="https://bankmangement.web.app/"><div class="text">Bank-Management</div></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mt-project'>
                            <div className="Container">
                                <img src={project2} className='imagefuid projects'></img>

                                <div class="overlay">
                                    <a href="https://react-e-commercesite.web.app/"><div class="text">E-Commerce</div></a>
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
