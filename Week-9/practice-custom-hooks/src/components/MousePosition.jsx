import useMousePointerPosition from '../hooks/useMousePointerPosition';

const MousePosition = () => {
  const mousePosition = useMousePointerPosition();

  return (
    <p>Mouse Position at {mousePosition.x}, {mousePosition.y}</p>

  )
}

export default MousePosition
