import React, { useState } from 'react';

function ShowList(props) {
    const [items,setItems]=useState([{"name":"abhishek","lastname":"ghosh"},
    {"name":"ram","lastname":"sharma"}])
    return (
        <div>
            <ul>

                {
                 items.map(item=>(<li>
                     {item.name}    
                 </li>))


                }
            </ul>
        </div>
    );
}

export default ShowList;