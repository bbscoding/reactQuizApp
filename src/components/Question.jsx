import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

const Question = ({
    questionText,
    answers,
    onSelectAnswer,
    selectedAnswers,
    answerState,
    onSkipAnswer
}) => {
    return (
        <>
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswers={selectedAnswers}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </>
    )
}

export default Question