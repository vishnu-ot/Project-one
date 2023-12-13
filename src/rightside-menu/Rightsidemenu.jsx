import React from 'react'

import "./Rightsidemenu.css"
import Rightsidephoto from './Rightsidephoto/Rightsidephoto'

function Rightsidemenu() {
  return (
    <div className='rightsidecontainer'>
        <div className='names'>
            <h4>Artists</h4>
            <h4 style={{color:'gray'}}>Photograghers</h4>
        </div>
        <Rightsidephoto/>
        <Rightsidephoto/>
        <Rightsidephoto/>
        <Rightsidephoto/>
        <Rightsidephoto/>
        <Rightsidephoto/>
    </div>
  )
}

export default Rightsidemenu