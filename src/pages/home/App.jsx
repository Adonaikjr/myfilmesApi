import { useState } from 'react'
import { Container } from './styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}

export default App
