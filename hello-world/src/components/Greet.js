import React from 'react'


/* function Greet() {
    return <h1>Hello Cypher</h1>
} */

const Greet =  props  => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            
        </div>
    ) 
}

//default export allowing you to give any name to it when importig in App.js
export default Greet;