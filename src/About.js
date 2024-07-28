import React from 'react'
import pro_img from './Images/002.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'
// import resume from './resume/Denish Kathiriya Resume.pdf'
import resume from './resume/Denish Kathiriya Resume Fullstack.pdf'



export default function About() {
    return (
        <>

            <Home />


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
                                <p className='font-edit'>
                                    Enthusiastic and detail-oriented full-stack web developer with a solid foundation in
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

            <Footer />

        </>
    )
}
