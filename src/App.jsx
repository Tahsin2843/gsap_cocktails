import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';
let App = () => {
    return (
        <>
            <div className="flex-center h-[100vh]" >
                <h1 className="text-3xl text-indigoj-300">Hello, Gsap!</h1>
            </div>
        </>
    )
}

export default App;