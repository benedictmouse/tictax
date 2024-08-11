
import React , {useState}from 'react'

const Tictac = ({value , onTictacClick}) => {
   
  return (
    <>
    <button className='square' onClick={onTictacClick} >{value}</button>
    </>
  )
}

export default Tictac