import React from 'react'
import Home from './Home'
import Footer from './Footer'


export default function Layouts(props) {
    return (
        <>

            <Home />

            {props.children}
            <Footer />

        </>

    )
}
