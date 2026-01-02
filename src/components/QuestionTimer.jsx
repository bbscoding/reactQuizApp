import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timeoutVar = setTimeout(() => {
            onTimeout();
        }, timeout)
         return () => {
            clearTimeout(timeoutVar)
        }
        
    }, [timeout, onTimeout])

    useEffect(() => {
        const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 100);
    }, 100);

        return () => {
            clearInterval(interval)
        }

    }, [])
    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}

export default QuestionTimer