import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
    <div className='container'>
        <div className='left'>
            <h1>A Swachh <i>ganga</i>, A Swachh Bharat: Join the Namami Gange Mission</h1>
            <div className='search'>
                <div className='searchInput'>
                    <button>Chat with Chacha Chaudhary . . .</button>
                    <img src='./img/chat.png' alt='' />
                </div>
            </div>
            <div className='popular'>
                <span>Ask:</span>
                <button>History Of the Ganges.</button>
                <button>Tell me about Namami Gange Project.</button>
                <button>How can I contribute towards this project?</button>
            </div>
        </div>
        <div className='right'>
            <img src="./img/man.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Featured