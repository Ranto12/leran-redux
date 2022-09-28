import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Counter from './component/counter'
import User from './component/Users/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      <User/>
    </>
  )
}

export default App
