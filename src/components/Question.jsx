import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from "../questions"

const Question = ({
    questionIndex,
    onSelectAnswer,
    onSkipAnswer
}) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            })
        }, 1000)
    }

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answerState.isCorrect ? "correct" : "wrong"
    } else if(answer.selectedAnswer){
        answerState = 'answered'
    }

    return (
        <>
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswers={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </>
    )
}

export default Question