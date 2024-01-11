import React from 'react'

const Backdrop = ({showModal}) => {
  return (
    <div style={{width:"100%",opacity:"0.5",backgroundColor:"grey",display:showModal?"block":"none",zIndex:999,position:"fixed",height:"800px"}}>

    </div>
  )
}

export default Backdrop
