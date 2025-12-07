import { useState } from 'react'

export default function Form () {
  const [person, setPerson] = useState('')
  console.log('person', person)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const message = `Hello ${person}`
        console.log(message)
        localStorage.setItem('greeting', message)
      }}
    >
      <input
        onChange={(event) => {
          setPerson(event.target.value)
        }}
        value={person}
      />
      <button>Submit</button>
      <button
        type='button'
        onClick={() => {
          setPerson('')
        }}
      >
        Reset
      </button>
    </form>
  )
}