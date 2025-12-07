import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      onClick={() => {
        console.log('click')
        const newCount = count + 1
        setCount(newCount)
      }}
    >
      Count: {count}
    </button>
  )
}