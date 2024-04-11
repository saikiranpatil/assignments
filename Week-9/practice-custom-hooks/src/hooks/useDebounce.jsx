import { useEffect, useState } from "react"

const useDebounce = (input, debounceTime) => {
    const [debouncedInput, setDebouncedInput] = useState(input);
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebouncedInput(input);
        }, debounceTime * 1000);

        return () => {
            clearTimeout(debounceTimeout);
        }
    }, [input, debounceTime]);

    return debouncedInput;
}

export default useDebounce
