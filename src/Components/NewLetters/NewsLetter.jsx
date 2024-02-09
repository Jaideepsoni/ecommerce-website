import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div  className='newsLetter-btn'>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
