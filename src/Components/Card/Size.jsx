import React, { useState } from 'react'


function Size(props) {
    const {sizes,isActive,selectSize} = props

  return (
    <>
        <button class="btn btn-sm btn-square rounded-md btn-outline" value={sizes} onClick={()=>selectSize(sizes)} style={{
            backgroundColor: isActive? 'black':'white',
            color: isActive? 'white':'black',
        }}
        >{sizes}</button>            
    </>
  )
}

export default Size