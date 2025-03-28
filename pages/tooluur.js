import { useState, useEffect } from "react";

export default function TimeoutCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 20) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return(
        <div className="flex justify-center items-center text-xl text-red-400">
            <h1>Counting: {count}</h1>
        </div>
    );
}