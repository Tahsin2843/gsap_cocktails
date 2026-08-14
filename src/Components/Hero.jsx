import {useGSAP} from "@gsap/react";
import {SplitText, ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

let Hero = () => {
    useGSAP(()=>{
        let heroSplit = new SplitText('.title', {type: 'chars, words'})
        let paragraphSplit = new SplitText('.subtitle', {type: 'lines'})


        heroSplit.chars.forEach(char =>char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: .07
        })

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            ease: 'expo.inOut',
            stagger: .07,
            delay: .3, duration: 1.8,

        })

        gsap.timeline({
            scrollTrigger:{
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.left-leaf', {y: -200}, 0)
            .to('.right-leaf', {y: 200}, 0)
    }, [])


    return (
        <>
        <section id="hero" className="noisy">
            <h1 className='title'>MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="hero-left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="hero-right-leaf" className="right-leaf" />
            <div className='body'>
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p >Cool. Crisp. Classic.</p>
                        <p className='subtitle'>Sip the spirit <br/> of Summer</p>
                    </div>
                    <div className="view-cocktails hidden md:block">
                        <p className="subtitle">
                            Every cocktail on our menu is a <br/> blend of premium ingredients, creative flair, and timeless recipes <br/> — designed to delight your senses.
                        </p>
                        <a href="#cocktails"> View Cocktails</a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Hero