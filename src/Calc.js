import React, { useState } from 'react';

function Calc(props) {

    const[count,setCount]=useState(50)
    const Increement =()=>{
        setCount(100)
        // count=count+1
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increement}>ClickMe</button>
        </div>
    );
}

export default Calc;