import {navLinks} from "../../Constants/index.js";
import {useGSAP} from "@gsap/react";
import  gsap from "gsap";

let Navbar = () => {
    useGSAP(() =>{
        let navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav',{
            background: 'transparent'
        },{
            backgroundColor:'#00000050',
            duration: 1,
            ease: 'power2.out',
        })
    }, [])
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/gsap_cocktails/images/logo.png" alt="logo"/>
                    <p> Velvet Pour </p>
                </a>

                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href= {`#${link.id}`} > {link.title} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;