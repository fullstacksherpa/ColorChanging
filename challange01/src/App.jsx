import Square from "./Square"
import Input from "./Input"
import {useState} from 'react'


function App() {
  const [colorValue, setColorValue] =useState('')


  return (
    <div className="min-h-full flex flex-col justify-center items-center mt-12">
        < Square colorValue={colorValue}/>
   <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </div>
 
  
  )
}

export default App
