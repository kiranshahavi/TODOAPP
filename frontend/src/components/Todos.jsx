import React from "react"
export const Todos = ({ todos }) => {
    return (<div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todo.completed == true ? "Completed" : "Mark As Completed"}</button>  
            </div>
        })}
        
    </div>)
}