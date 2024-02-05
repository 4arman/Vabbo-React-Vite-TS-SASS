import { useEffect, useState } from 'react'
import './HomeImageSlider.scss'
import { imageSlide } from './data'

export default function HomeImageSlider() {

    const [currentState, setCurrentState] = useState(0)
    useEffect(()=> {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 4000)
        return () => clearTimeout(timer)
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        height: `100%`
    }

    function goToNext(currentState: number) {
        setCurrentState(currentState)
    }

    return (
        <div className="home-slider">
            <div style={ bgImageStyle }></div>
            <div className='slider-desc'>
                <div>
                    <h1>{ imageSlide[currentState].title }</h1>
                    <p>{ imageSlide[currentState].body }</p>
                </div>
                <div className='carousel-boullt'>
                    {
                        imageSlide.map((imageSlide, currentState) => (
                            <span key={currentState} onClick={() => goToNext(currentState)}></span>
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}