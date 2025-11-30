// let count = 5
import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(5)
  console.log('render count', count)
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          console.log('click')
          // count += 1
          const newCount = count + 1
          setCount(newCount)
          // console.log('count', count)
        }}
      >
        Count: {count}
      </button>
    </div>
  )
}