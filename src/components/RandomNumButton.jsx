import { useState } from 'react'

function RandomNumButton()  {
  const random = Math.floor(Math.random() * 1000)

  const [count, setCount] = useState(0)

  return (
    <div>
      <p>number {count} </p>
      <button onClick={()=> setCount(random)}> 
        click me
      </button>
    </div>  
  )


}

export default RandomNumButton