import { atom, selector } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: []
});

export const todoFilterState = atom({
    key: "todoFilterState",
    default: ""
});

export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const todoList = get(todoListState);
        const filter = get(todoFilterState);

        return todoList.filter((todo) => todo.title.includes(filter) || todo.description.includes(filter));
    },
});