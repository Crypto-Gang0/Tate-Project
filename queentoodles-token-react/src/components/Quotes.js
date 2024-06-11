import React from 'react'
import '../styles/Quotes.css'
import { Link } from 'react-router-dom'

function Quotes() {
  return (
    <div className="Main-Quote">
      <div className='Header-Quote'>

            <h1 className='Title-Quote'>Road map</h1>
            <ul className='List'>
              <li>
              Launch on Pump.fun
              </li>
              <li>
              Dev Supply sent to Top G
              </li>
              <li>
              Hit Raydium 
              </li>
              <li>
              Send $BOAT to the Moon 
              </li>
              <li>
              Donate to Needy Childrens
              </li>
            </ul>
      </div>
      <img src={"tatethird.jpg"} alt="error loading" className='main-image-Quote'/>
      <div className='Header-Quote-Second'>

<h1 className='Title-Quote-Second'>Donate to <br/><Link to={"https://www.Tatepledge.com"} style={{color: "gold", textDecoration: "none"}}>Tatepledge.com</Link></h1>
<ul className='List-Second'>
  <li>
  Solana<br/>
3WMGfSfQrvgXMYkXhJnNLC5tTgs6JRpokyMXPX7qQgZY
  </li>
  <li>
  Ethereum <br/>
0x464d34Ddda800579697e594dF33e7d554a4b1D53
  </li>
 
</ul>
</div>
    </div>
  )
}

export default Quotes