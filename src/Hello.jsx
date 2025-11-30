export default function Hello({ person, punctuation }) {
  return (
    <div>
      Hello {person}, how are you doing today?
      How is the weather where you are living?
      Have you heard any interesting news?
      I hope you had a nice holiday recently{punctuation}
      --------------------------------------------
    </div>
  )
}
// export default function Hello(props) {
//   console.log(props)
//   return (
//     <div>
//       Hello {props.person}, how are you doing today?
//       How is the weather where you are living?
//       Have you heard any interesting news?
//       I hope you had a nice holiday recently{props.punctuation}
//       --------------------------------------------
//     </div>
//   )
// }