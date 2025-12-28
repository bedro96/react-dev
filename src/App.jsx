import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header title="React Development!" />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-gray-800/60 rounded-lg p-6 shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
          <p className="mb-4 text-gray-300">Random name is linked to useState. Clicking the button will not change it.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              count is {count}
            </button>

            <div className="text-sm text-gray-400">Click the button to increment the counter.</div>
          </div>
        </div>

        <div className="mt-8">
          <Content />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
