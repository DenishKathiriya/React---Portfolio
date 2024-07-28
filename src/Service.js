import React from 'react'
import svg1 from './Images/003.svg'
import svg2 from './Images/004.svg'
import svg3 from './Images/005.svg'
import svg4 from './Images/006.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'

export default function Service() {
    return (
        <>

            <Home />

            <Container id='service'>
                <div className='service mt-5 mb-5'>
                    <div className='text-center'>
                        <p className='mb-1 what-i-do'>What I Do ?</p>
                        <p className='p-about'>Service</p>
                    </div>
                    <Row className='mt-5'>
                        <Col lg={3} md={6}>
                            <div className='service-card'>
                                <div className="body">
                                    <img src={svg1} className='img-fluid svg-img'></img>
                                    <p className='p-service m-3'>HTML</p>
                                    <p class="subtitle">HTML (HyperText Markup Language) is the standard markup language used to create and design web pages.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='service-card'>
                                <div className="body">
                                    <img src={svg2} className='img-fluid svg-img'></img>
                                    <p className='p-service m-3'>CSS</p>
                                    <p class="subtitle">CSS styles HTML elements to control their appearance, layout, and design on web pages effectively.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='service-card'>
                                <div className="body">
                                    <img src={svg3} className='img-fluid svg-img'></img>
                                    <p className='p-service m-3'>JavaScript</p>
                                    <p class="subtitle">JavaScript adds interactivity to websites through dynamic content, animations, and responsive user interfaces.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='service-card'>
                                <div className="body">
                                    <img src={svg4} className='img-fluid svg-img'></img>
                                    <p className='p-service m-3'>ReactJs</p>
                                    <p class="subtitle">React.js is a JavaScript library for building user interfaces with reusable components efficiently.</p>
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
