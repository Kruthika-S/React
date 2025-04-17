import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>My App</h1>
        </div>
    )
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'click me to visit google',
// } 


const anotherElement=(
    <a href="https://google.com" target="_blank">visit google </a>
)

const reactElement = React.createElement(
        'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
   // <myApp />
   //anotherElement 
  // reactElement
)
