import React from 'react'
import "./style.css";
import Info from "./components/info"
import About from "./components/about"
import Interest from "./components/interest"
import Footer from "./components/footer"

export default function App(){
    return(
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}