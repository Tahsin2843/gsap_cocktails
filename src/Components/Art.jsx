import {featureLists, goodLists} from "../../Constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

let Art = () =>{
    let isMobile = useMediaQuery({maxWidth: 767})

    useGSAP(() =>{
        let start = isMobile ? 'top 20%' : 'top top'

        let maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: 2,
                pin: true
            }
        })

        maskTimeline
            .to('.will-fade', {opacity: 0, ease: 'power1.inOut', stagger: .2, })
            .to('.masked-img', {scale: 1.5, maskPosition: 'center', maskSize: 300, duration: 1, ease: 'power1.inOut'})
            .to('#masked-content', {opacity: 1, duration: 1, ease: "power1.inOut"})
    })

    return(
        <div id='art' >
            <div className='container h-full mx-auto pt-20'>
            <h2 className='will-fade'>The ART</h2>

                <div className="content">
                    <ul className='spacey-y-4 will-fade'>
                        {goodLists.map((feature, index) =>(
                            <li key={feature} className='flex items-center gap-2'>
                                <img src="/gsap_cocktails/images/check.png" alt="check"/>
                                {feature}
                            </li>
                        ))}
                    </ul>



                    <div className="cocktail-img">
                        <img src="/gsap_cocktails/images/under-img.jpg" className='abs-center masked-img object-contain' alt="cocktail"/>
                    </div>

                    <ul className='spacey-y-4 will-fade '>
                        {featureLists.map((feature, index) =>(
                            <li key={feature} className='flex items-center justify-start gap-2'>
                                <img src="/gsap_cocktails/images/check.png" alt="check"/>
                                <p className='md:w-fit w-60'> {feature} </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className='will-fade'> Sip Worthy Perfection</h2>

                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art