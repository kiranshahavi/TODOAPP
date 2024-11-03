import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return <div>
        <input id="title" style={{
            margin: 10,
            padding: 10
        }} type="text" placeholder="TITLE" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}></input><br />
        <input id="desc" style={{
            margin: 10,
            padding: 10
        }} type="text" placeholder="DESCRIPTION"onChange={function(e){
            const value = e.target.value;
            setDesc(value)
        }}></input><br />

        <button style={{
            margin: 10,
            padding: 10
        }} onClick={() => {
            fetch("http://localhost:5001/todo",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description: desc
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                alert("Todo Added!!!")
            })
        }} >Add todo</button>
    </div>
}