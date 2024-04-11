import useCountCounter from '../hooks/useCountCounter'

const CountCounter = () => {
    const count = useCountCounter();
    return (
        <div>
            Count is {count}
        </div>
    )
}

export default CountCounter
