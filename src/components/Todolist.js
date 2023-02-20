import React, {useState} from "react";

export default function Todolist() {

    const [todoInputText, setTodoInputText] = useState("")
    const [ todos, setTodos] = useState ([
        {
            todo: "Go to church!",
            complete: true
        },
        {
            todo: "Eat",
            complete: false
        },
        {
            todo: "Code a todo-list App with React",
            complete: true
        },
        {
            todo: "Go shopping",
            complete: false
        }
    ])

    function handleAddTodo() {
        if(todoInputText.length > 0){
            setTodos([...todos, {todo: todoInputText, Complete: false }])
        }
    }
    function handleTodoClicks(e, index){
        switch(e.detail) {
            case 1:
                const newArr = []
                todos.map((item, index2)=> {
                    if(index2 === index) {
                        newArr.push ({
                            todo: item.todo,
                            complete: !item.complete
                        })
                    } else {
                        newArr.push(item)
                    }
                })
                setTodos(newArr)
                break;

            case 2:
                setTodos( todos.filter((item, index3)=> index3 !== index))
                break;

            default:
                break;
            }
        }
    
    return (
        <div className="todo-container">
            <input onChange = {e => setTodoInputText(e.target.value)} className="input-todo-text" type="text" placeholder="enter a task"/>
            <button onClick={() => handleAddTodo()} className = "add-todo-button">Add</button>
            <div className="display-todo-container">
                {todos.map((todo, index) => (
                    <h3 style={{textDecoration: todo.complete ? "line-through" : "none", background: todo.complete ? "red" : null}} onClick = {e => handleTodoClicks (e, index)} className = "todo-item-text">
                        {todo.todo}
                    </h3>
                ))}
            </div>
        </div>
    )
}

// double click deletes a task entirely
// single click marks a task as done