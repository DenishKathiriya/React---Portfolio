import React from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import pro_img from './Images/002.png'
import svg1 from './Images/003.svg'
import svg2 from './Images/004.svg'
import svg3 from './Images/005.svg'
import svg4 from './Images/006.svg'
import project1 from './Images/Screenshot 2024-01-24 164821.png'
import project2 from './Images/Screenshot 2023-12-15 162601.png'
import AOS from 'aos';
import Layouts from './Layouts';
import About from './About'
import Contact from './Contact';
import Service from './Service'
import Projects from './Projects'
import ReactRouter from './ReactRouter';
import resume from './resume/My resume demo.pdf'


export default function AllContant() {
    return (
        <>

            <Layouts>



                <div>
                    <Container>
                        <Row id='about'>
                            <Col lg={5} md={6} sm={12}>
                                <img src={pro_img} className='img-fluid about-img-holder'></img>
                            </Col>
                            <Col lg={7} md={6} sm={12} className='about'>
                                <div className='about-media'>
                                    <p className='mb-1 font-edit'>Who Am I ?</p>
                                    <p className='p-about'>About Me</p>
                                    <p className='font-edit'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste. <br />
                                        culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
                                    </p>
                                    <a href={resume} download={resume}>
                                        <Button variant="outline-primary btn-clr mt-4">Download CV</Button>{' '}
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Container id='service'>
                    <div className='service mt-5'>
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
                                        <p class="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                            molestias dolorem iste quod.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='service-card'>
                                    <div className="body">
                                        <img src={svg2} className='img-fluid svg-img'></img>
                                        <p className='p-service m-3'>CSS</p>
                                        <p class="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                            molestias dolorem iste quod.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='service-card'>
                                    <div className="body">
                                        <img src={svg3} className='img-fluid svg-img'></img>
                                        <p className='p-service m-3'>JavaScript</p>
                                        <p class="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                            molestias dolorem iste quod.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='service-card'>
                                    <div className="body">
                                        <img src={svg4} className='img-fluid svg-img'></img>
                                        <p className='p-service m-3'>ReactJs</p>
                                        <p class="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                            molestias dolorem iste quod.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>



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
                                        <a href="https://ai-land-test.web.app"><div class="text">Ai-Land-Project</div></a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='mt-project'>
                                <div className="Container">
                                    <img src={project2} className='img-fluid projects'></img>

                                    <div class="overlay">
                                        <a href="https://urban-real-estate-test.web.app/"><div class="text">Urban-real-estate-project</div></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>




            </Layouts>



        </>
    )
}
