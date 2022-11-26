import React from 'react'
import '../assets/css/gacha.css'

function clickMe(){
    alert('You clicked me!')
}

export default function Gacha() {
  return (
    <div>Gacha page
        <button className='gachaButton' onClick={clickMe}> Play </button>
    </div>
  )
}
