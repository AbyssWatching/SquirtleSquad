import React from 'react'

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
