import { useState } from 'react'
import useDebounce from '../hooks/useDebounce';

const DebouncedInput = () => {
    const [input, setInput] = useState("");
    const debouncedInput = useDebounce(input, 2);
    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <p>Input: {input}</p>
            <p>Debounced Input: {debouncedInput}</p>
        </div>
    )
}

export default DebouncedInput
