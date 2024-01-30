import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layouts from './Layouts'
import Home from './Home'
import Footer from './Footer'

export default function Contact() {
    return (
        <>

            <Home />

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

                        {/* <Button variant="outline-primary btn-clr mt-4">Send Message</Button>{' '} */}
                        <input type="submit" value="Send Message" class="btn btn-outline-primary rounded mt-4 mb-5"></input>


                    </div>


                </div>
            </Container>

            <Footer />


        </>
    )
}
