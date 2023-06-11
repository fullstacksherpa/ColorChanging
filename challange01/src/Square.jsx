import React from 'react'

const Square = ({colorValue}) => {
  return (
    <section className='w-96 h-96 border-2 border-black shadow-sm rounded-md grid content-center' style={{backgroundColor: colorValue}}>
      <p className={`text-center text-3xl ${colorValue === 'black' ? 'text-white': 'text-black'}`}>{colorValue? colorValue: "Empty Value"}</p>

    </section>
    
  )
}

Square.defaultProps ={
  colorValue:"Empty Value"
}

export default Square