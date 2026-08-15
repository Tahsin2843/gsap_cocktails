import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

let About = () => {


    return (
        <div id="about">
            <div className='mb-16'>
                <div className="content">
                    <div className='lg:col-span-8'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>Where Every Details Matters <span className='text-white'> - </span> from muddle to garnish</h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            The Margarita is a classic that balances tangy lime, smooth tequila,
                            and a touch of sweetness. Shaken, frozen, or on the rocks—it's always
                            crisp & refreshing.
                        </p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span> /5
                            </p>
                            <p className='text-sm text-white-100'>
                                More Than 12,000+ Customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="top-grid">
                <div className='xl:col-span-3'>
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt=""/>
                </div>

                <div className='xl:col-span-6'>
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt=""/>
                </div>

                <div className='xl:col-span-3'>
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt=""/>
                </div>
            </div>


            <div className="bottom-grid">
                <div className='md:col-span-8'>
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt=""/>
                </div>

                <div className='md:col-span-4'>
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About