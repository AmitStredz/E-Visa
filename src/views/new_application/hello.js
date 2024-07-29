import React from 'react'

export function Hello(){
    const handleButtonClick = () =>{
        console.log("Hello");
    }
  return (
    <div>
        <button onClick={handleButtonClick}>Click</button>
    </div>
  )
}
