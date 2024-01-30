import React from 'react'
import pro_img from './Images/002.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'
import resume from './resume/My resume demo.pdf'


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

            <Footer />

        </>
    )
}
