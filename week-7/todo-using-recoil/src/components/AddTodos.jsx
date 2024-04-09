import { useRecoilState } from "recoil"
import { todoListState } from "../atoms"
import { useState } from "react";

const AddTodos = () => {
    const [todo, setTodo] = useRecoilState(todoListState);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = () => {
        const newTodo = [...todo, { title, description }];
        setTodo(newTodo);
    }

    return (
        <>
            <h1>Add Todo</h1>
            <input
                type="text"
                placeholder='Todo Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='Todo Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
        </>
    )
}

export default AddTodos
