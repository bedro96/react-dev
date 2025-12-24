import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Content />
      <Footer />
    </>
  )
}

export default App
