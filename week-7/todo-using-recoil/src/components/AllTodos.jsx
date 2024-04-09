import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodoListState, todoFilterState } from "../atoms";

const AllTodos = () => {
    const setFilter = useSetRecoilState(todoFilterState);
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <h1>All Todos</h1>
            <div>Filter:
                <input
                    id="filter"
                    type="text"
                    placeholder='Enter your filter here'
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todo) => (
                        <tr key={todo.title + todo.description}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AllTodos
