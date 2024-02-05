import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import './StarRating.scss'

export default function StarRating() {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <>
        {[...Array(5)].map((star, index) => {
        const cuurentRating = index + 1

           return (
            <label>
            <input 
            type="radio"
            name='rating'
            value={cuurentRating}
            onClick={() => setRating(cuurentRating)}
            />
            <FaStar 
            className='star' 
            size={40}
            style={{
                color: cuurentRating <= (hover || rating) ? "#4b99e3" : "#b9ddff"
            }} 
            onMouseEnter={() => setHover(cuurentRating)}
            onMouseLeave={() => setHover(null)}
            />
            </label>
           )
        })}
        </>
    )
}