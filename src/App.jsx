import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function useWrappedEffect(initialValue) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log('inner', initialValue.current)
  }, [])
}
function App() {
  const ref = useRef(null);
  const value = useWrappedEffect(ref);

  useEffect(() => {
    console.log('outer', ref.current)
  }, [])

  return (
    <div className="App" ref={ref}>
      test
    </div>
  )
}

export default App
