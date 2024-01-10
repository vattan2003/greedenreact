import React from "react"
import ReactDOM from "react-dom/client"
import Nav from "./nav"
import "./style.css"
import Hero from "./hero"
import About from "./about"
import Footer from "./footer"
import Product from "./product"



const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <div>
        <Nav></Nav>
        <Hero></Hero>
        <Product></Product>
        <About></About>
        <Footer></Footer>
        
    </div>
)