import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let [status,setStatus]= useState('');

  //let counter = 5

  const addValue= () =>{
    console.log('clicked', counter);
    if(counter ===20){
      alert('counter full')
      setStatus('counter full');
      return
    }
    //counter = counter+1;
    // setCounter(counter);
    setCounter(counter+1);
    // setCounter(prevCounter => prevCounter+1);  this adds +4 bcoz v have written 4 times if we write only sercounter(counter+1) many times there will be no changes it will add 1 every time bocz it take it as batches as we studied in fiber but if we write it in the form i have written now only then it will add multiple times bcoz here v r taking previous value and adding it there it just take it as a batch and do it once as if every time there is same work going on here the syntaax is of basic js arrow function
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    setStatus('');
  }

  const removeValue=() =>{
    console.log('removed', counter);
    if(counter === 0){
      alert('counter empty')
      setStatus('counter empty')
      return
    }
    setCounter(counter-1)
    setStatus('')
  }

  
  return (
    <>
      <h1> Hello Kruthikaa!!</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick= {removeValue}>Remove Value  {counter}</button>
      <p>Status: {status}</p>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
