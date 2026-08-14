import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
let App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className='h-dvh bg-black'/>
        </main>
    )
}

export default App;