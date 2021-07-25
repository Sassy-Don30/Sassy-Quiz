import React, { Fragment, useState } from "react";
//Components
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";

//Types
import { Difficulty, QuestionState } from "./API";

//Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestion = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		setQuestions(newQuestion);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// Users answers
			const answer = e.currentTarget.value;

			//Check answer against correct answer
			const correct = questions[number].correct_answer === answer;

			// Add score if answer is correct
			if (correct) setScore((prev) => prev + 1);

			// Save answer in array for user answers
			const answerObj = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObj]);
		}
	};

	const nextQuestion = () => {
		// Move to next question if not the last
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) setGameOver(true);
		else setNumber(nextQuestion);
	};

	return (
		<Fragment>
			<GlobalStyle />
			<Wrapper>
				<h1>REACT QUIZ</h1>
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<button className="start" onClick={startTrivia}>
						Start
					</button>
				) : null}

				{!gameOver ? <p className="score">Score: {score}</p> : null}
				{loading && <p>Loading questions...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNumber={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={
							userAnswers ? userAnswers[number] : undefined
						}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</Wrapper>
		</Fragment>
	);
};

export default App;
