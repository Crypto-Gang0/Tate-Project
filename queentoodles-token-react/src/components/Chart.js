import '../styles/Chart.css'
import ChartObject from './ChartObject';
import React, { useState, useEffect } from 'react';
function ChartComp() {
  return (
    <div className="Main">
      <div className='Header'>
      <p className='main-paragraph'> History is being made in the Crypto space with the Top G's meta;<br /> <span className='coin-name'>$RNT</span>- Real Nigger Tate,
      <span className='coin-name'>$DADDY</span>- DaddyTate, <span className='coin-name'>$TOPG</span>- TOP G, making us all filthy rich. <br />
We need a log book to keep all that historical events secured for <br /> the future degens to remember the matrix was broken by The Alpha Male,
 Andrew Tate.<br /> The Top G's logbook, <span className='coin-name'>$BOAT</span>- Book Of Andrew Tate.
        </p>
            <h1 className='second-title'>Road map</h1>
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
      <img src={"tate.png"} alt="error loading" className='main-image'/>
    </div>
  );
}

export default ChartComp;
