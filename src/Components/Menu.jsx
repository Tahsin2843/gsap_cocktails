import {allCocktails} from "../../Constants/index.js";
import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

let Menu = () =>{
    let contentRef = useRef()
    let [ currentIndex, setCurrentIndex] = useState(0)

    useGSAP(() =>{
        gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1})
        gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 1})
        gsap.fromTo('.details h2, .details p', {yPercent: 100, opacity: 0,}, {opacity: 1, yPercent: 1})
    }, [currentIndex])

    let totalCocktails = allCocktails.length
    let gotoSlide = (index) =>{
    let newIndex = (index + totalCocktails) % totalCocktails

        setCurrentIndex(newIndex)
    }

    let getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    let currentCocktail = getCocktailAt(0)
    let prevCocktail = getCocktailAt(-1)
    let nextCocktail = getCocktailAt(1)


    return(
        <section id='menu' aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

            <h2 id='menu-heading' className='sr-only'> Cocktail Menu </h2>

            <nav className='cocktail-tabs' aria-label='Cocktail Navigation' >
                {allCocktails.map((cocktail, index) =>{
                    let isActive = index ===currentIndex;

                    return(
                        <button
                            onClick={() =>gotoSlide(index)}
                            key={cocktail.id} className={`${isActive?
                            'text-white border-white'
                            :
                            'text-white/50 border-white/50'}`} >
                            {cocktail.name}
                        </button>
                    )
                })}

            </nav>

            <div className="content">
                <div className="arrows">
                    <button onClick={() => gotoSlide(currentIndex - 1)} className='text-left'>
                        <span> {prevCocktail.name} </span>
                        <img src="/images/right-arrow.png" aria-hidden='true' alt=""/>
                    </button>

                    <button onClick={() => gotoSlide(currentIndex + 1)} className='text-left'>
                        <span> {nextCocktail.name} </span>
                        <img src="/images/left-arrow.png" aria-hidden='true' alt=""/>
                    </button>

                </div>
                
                <div className="cocktail">
                    <img src={currentCocktail.image} className='object-contain' alt='current-cocktail'/>
                </div>

                <div className="recipe">
                    <div className='info' ref = {contentRef}>
                        <p>Recipe for: </p>
                        <p id='title'> {currentCocktail.name} </p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export  default Menu