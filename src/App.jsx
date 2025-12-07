import Hello from "./Hello"
import Counter from "./Counter"
import Form from "./Form"

const welcomeMessage = 'Welcome to the app where we give out greetings'

export default function App () {
  return (
    <div>
      <Counter />
      <Form />
      <h3>{welcomeMessage}</h3>
      <Hello person="Dorothy" punctuation="!" />
      <Hello person="Zelda" punctuation="?" />
      <Hello person="Tallulah" punctuation="." />
    </div>
  )
}