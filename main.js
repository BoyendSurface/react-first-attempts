import React from 'react'



const Main = () => {
  return (
    <main className="dark">
     <h1 className="main-title">Fun facts about React</h1>
        <img src="../images/icons-react.png" alt="react" 
        id="nav-logo" />  
            <ul className="main-facts">
            <li>Was first released in 2013</li>
            <li>Raect is not a framework</li>
            <li>React development And SEO Go together</li>
            <li>Virtual DOM is faster the real DOM</li>
            <li>React has a strong Community</li>
            <li>React is not just a Fad</li>
        </ul>
    </main>
  )
}

export default Main
