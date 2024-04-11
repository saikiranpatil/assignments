import { useEffect, useState } from "react"

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const onlineEventListener = window.addEventListener("online", () => setIsOnline(true));

        const offlineEventListener = window.addEventListener("offline", () => setIsOnline(false))

        return () => {
            removeEventListener("online", onlineEventListener);
            removeEventListener("offline", offlineEventListener);
        }
    }, []);

    return isOnline;
}

export default useIsOnline
