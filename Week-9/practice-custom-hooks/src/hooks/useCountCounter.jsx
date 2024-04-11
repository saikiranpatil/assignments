import { useEffect, useState } from 'react'

const useCountCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => {
            clearInterval(countInterval);
        }
    }, []);

    return count;
}

export default useCountCounter
