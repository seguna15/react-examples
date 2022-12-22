import React from "react";

const Hello = () => {
    /* JSX Syntax
    return <div className='dummyClass'>
        <h1>Hello Cypher</h1>
    </div> */
    
    //Without JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Cypher')
    )
}

export default Hello