import React from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {cocktailLists, mockTailLists} from "../../Constants/index.js";

let Cocktails = () =>{
    useGSAP(() =>{
        let parallaxTime = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: true,
            }

        })

        parallaxTime
            .from('#c-left-leaf', {x: -100, y: 100})
            .from('#c-right-leaf', {y:600, x: 40})
    })


    return(
        <section className='noisy' id='cocktails'>
            <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="l-leaf"/>
            <img src="/images/cocktail-right-leaf.png" id='c-right-leaf' alt="r-leaf"/>

            <div className="list">
                <div className="popular">
                    <h2>Most Popular Cocktails: </h2>
                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) =>(
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>

                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most Popular Mocktails: </h2>
                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) =>(
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export  default  Cocktails