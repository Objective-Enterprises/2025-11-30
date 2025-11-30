import Hello from "./Hello"
import Counter from "./Counter"

const welcomeMessage = 'Welcome to the app where we give out greetings'

export default function App () {
  return (
    <div>
      <Counter />
      <h3>{welcomeMessage}</h3>
      <Hello person="Dorothy" punctuation="!" />
      <Hello person="Zelda" punctuation="?" />
      <Hello person="Tallulah" punctuation="." />
    </div>
  )
}