import React, { useState } from 'react';

export default function AddContact(){   
    const [data, setPerson] = useState([
        {
            name: '',
            age: '',
            city: ''
        }
    ])
    console.log(data.name)
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            setPerson([{name: 1}])
                setPerson(() => {
                    let res = data
                    res.name = e.target[0].value
                    res.age = e.target[1].value
                    res.city = e.target[2].value
                    return res
                })
            // setPerson([...data, {name: e.target[0], age: e.target[1], city: e.target[2]}])
        }}>
                        
                <input type="text" name ="name "placeholder="Name" key="name"/>
                <input type="text" name = "age" placeholder="Age" key="age"/>
                <input type="text" name = "city" placeholder="City" key="city"/>
                <button>add</button>
                {/* {data} */}
        </form>
    );
}