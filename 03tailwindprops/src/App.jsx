import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"kruthika",
    age: 21
  }

  let newarr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username ="chai aur me" smtg ={newarr} btnText="Clickme"/>
      <Card username="kruthika" btnText="visit"/>
      <Card username="kr"/>
      
    </>
  )
}

export default App