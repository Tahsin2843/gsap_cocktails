import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Cocktails from "./Components/Cocktails.jsx";
import About from "./Components/About.jsx";
import Art from "./Components/Art.jsx";
import Menu from "./Components/Menu.jsx";
import Contact from "./Components/Contact.jsx";

let App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    )
}

export default App;