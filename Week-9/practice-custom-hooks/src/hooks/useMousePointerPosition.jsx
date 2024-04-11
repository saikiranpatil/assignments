import { useEffect, useState } from "react"

const useMousePointerPosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: window.event.clientX, y: window.event.clientY });
    useEffect(() => {
        const mouseMoveEventListner = addEventListener("mousemove", (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        })

        return () => {
            removeEventListener("mousemove", mouseMoveEventListner);
        }
    }, [])

    return mousePosition;
}

export default useMousePointerPosition
