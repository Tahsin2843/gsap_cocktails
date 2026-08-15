import React from "react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {useGSAP} from "@gsap/react";

let About = () => {
    useGSAP(() =>{
        let titleSplit = SplitText.create('#about h2', {
            type : 'words'
        })

        let scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'top 100%',
                end: 'bottom 0%',
                scrub: true
            }
        })

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, stagger: .09
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0.7, ease: 'power1.inOut', duration: 1
            }, )
    })


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