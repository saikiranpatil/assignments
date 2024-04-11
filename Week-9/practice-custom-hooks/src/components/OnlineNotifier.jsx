import useIsOnline from '../hooks/useIsOnline';

const OnlineNotifier = () => {
    const isOnline = useIsOnline();

    return (
        <h1>You are {isOnline ? "Online" : "Offline"}</h1>
    )
}

export default OnlineNotifier
