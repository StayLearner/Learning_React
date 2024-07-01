import React from 'react'
import ReactDOM from 'react-dom/client'


// import App from './App.jsx'




// function MYApp(){
//   return(
//     <div>
//       <h1>Custom App | Chai</h1>
//     </div>
//   )
// }



// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }






const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)




const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me ',
  anotherElement
)




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // anotherElement
  reactElement
)

