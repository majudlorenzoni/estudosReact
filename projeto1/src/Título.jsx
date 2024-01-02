import { useState } from "react";

function Titulo({cor}){
    const [texto, setTexto] = useState("Projeto 1");
    const [inputText, setInputText] = useState("");

    function clicou(){
        setTexto(inputText);
    }
    
    return (
        <div>
            <h1 style = {{ color : cor }}>{texto}</h1>
            <input value= {inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text"/>
            <buttom onClick = {clicou}>Mudar</buttom>
        </div>
    )
}

export default Titulo;