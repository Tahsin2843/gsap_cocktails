import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Cocktails from "./Components/Cocktails.jsx";
let App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    )
}

export default App;