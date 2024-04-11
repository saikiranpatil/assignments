import { useEffect } from 'react';
import useFetchTodos from '../hooks/useFetchTodos';
import Loader from "./Loader";

const AllTodos = () => {
    const { todos, loading } = useFetchTodos(500);

    useEffect(() => {
    }, [loading]);


    return loading ? <Loader /> : (
        <>
            {
                todos.map((todo) => (<div key={todo.title + todo.description}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                </div>))
            }
        </>
    )
}

export default AllTodos
