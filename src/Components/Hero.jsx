import {useGSAP} from "@gsap/react";
import {SplitText, ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";

gsap.registerPlugin(ScrollTrigger)

let Hero = () => {
    let videoRef = useRef()
    let videoTimeLineRef = useRef()

    let isMobile = useMediaQuery({maxWidth: 767})

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

        let startValue = isMobile? 'top 50%' : 'center 60% '
        let endValue = isMobile? '120% top' : 'bottom top'


         let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue, end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata =() =>{
            tl.to(videoRef.current, {
                currentTime : videoRef.current.duration
            })
        }

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

            <div className='video absolute inset-0'>
                <video
                    ref={videoRef}
                    src= '/videos/input.mp4'
                    muted
                    playsInline
                    preload='auto'
                />

            </div>
        </>
    )
}

export default Hero