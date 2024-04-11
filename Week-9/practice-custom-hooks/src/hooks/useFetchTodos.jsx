import axios from "axios";
import { useEffect, useState } from "react"

const useFetchTodos = (dataRefreshTime) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const res = await axios.get("https://sum-server.100xdevs.com/todos");
        setTodos(res.data.todos);
        setLoading(false);
    }
    useEffect(() => {
        const fetchInterval = setInterval(() => {
            getData();
        }, dataRefreshTime * 1000);

        return () => {
            clearInterval(fetchInterval);
        }
    }, [dataRefreshTime]);

    useEffect(() => {
        getData();
    }, [])


    return { todos, loading };
}

export default useFetchTodos
