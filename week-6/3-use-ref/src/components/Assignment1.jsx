import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const inputFeildRef = useRef();
    useEffect(() => {
        handleButtonClick();
    }, []);

    const handleButtonClick = () => {
        inputFeildRef.current.focus();
    };


    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={inputFeildRef} />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
