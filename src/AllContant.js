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
import project1 from './Images/human-use-smartphone-online-banking-600nw-2306202875.webp'
import project2 from './Images/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg'
import AOS from 'aos';
import Layouts from './Layouts';
import About from './About'
import Contact from './Contact';
import Service from './Service'
import Projects from './Projects'
import ReactRouter from './ReactRouter';
import resume from './resume/Denish Kathiriya Resume Fullstack.pdf'


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
                                    <p className='font-edit'>Enthusiastic and detail-oriented full-stack web developer with a solid foundation in
                                        front-end and back-end technologies. Proficient in HTML5, CSS3, and JavaScript,
                                        with hands-on experience in responsive web design using Bootstrap. Skilled in
                                        building dynamic web applications with React.js for front-end development and
                                        Node.js for server-side scripting. Familiarity with database management systems
                                        including MongoDB Firebase for real-time databases. Eager to apply
                                        academic knowledge and practical skills gained through projects and coursework to
                                        contribute effectively to innovative web development projects. Quick learner with a
                                        passion for leveraging emerging technologies to deliver intuitive, scalable, and
                                        efficient solutions that meet client needs.

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



                <Container id='projects'>
                    <div className='service mt-5'>
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


                <Container id='contact'>
                    <div className='service mt-5'>
                        <div className='text-center'>
                            <p className='mb-1 what-i-do'>How can you communicate?</p>
                            <p className='p-about'>Contact</p>
                        </div>

                        <div className='text-center mt-5'>
                            <Row className='margin'>
                                <Col md={6}>
                                    <input className='input form-control' type="text" placeholder='Your Name' />
                                </Col>
                                <Col md={6}>
                                    <input className='form-control' type="email" placeholder='Enter Email' />
                                </Col>
                            </Row>
                            <br />
                            <div className="row margin">
                                <div className="col">
                                    <textarea className='form-control' name="" id="" cols="30" rows="6" placeholder='Write Somthing'></textarea>
                                </div>
                            </div>

                            <Button variant="outline-primary btn-clr mt-4 mb-5">Send Message</Button>{' '}
                            {/* <input type="submit" value="Send Message" class="btn btn-outline-primary rounded mt-4 mb-5"></input> */}


                        </div>


                    </div>
                </Container>


            </Layouts>



        </>
    )
}
