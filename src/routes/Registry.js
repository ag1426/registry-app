import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

function Registry(){

    const [resgistryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)
    
    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...resgistryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    useEffect(() => {
        if(textInput.length > 10 ) setError(true);
        else setError(false)
    }, [textInput])


    const removeItem = (index) => {
        let newData = [...resgistryData]
        newData[index] =textInput;
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if(error) return;
        let newData = [...resgistryData]
        newData[index] = textInput;
        setRegistryData(newData)
    }

    console.log(resgistryData)
    return (
        <div className="registry">
            <h1>Registry</h1>
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={ addItem }>
                <label>Text input:
                    <input type ="text" value={textInput} onChange={ (e) => setTextInput(e.target.value) } />
                 </label>
                 <input type="submit" value="submit"/>
            </form>
            { error ? <span style={{color: "red"}}>Error occured</span> : null }

            {
                resgistryData.map((item, index) => {
                    return (
                        <li key={index}>{item} <button onClick={ () => removeItem(index) }>Remove</button>  <button onClick={ () => editItem(index) }>Edit</button> </li>
                    )
                })
            }
         </div>
    )
}


export default Registry;