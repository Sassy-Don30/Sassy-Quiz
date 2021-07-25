import React from "react";

// Types
import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => {
	return (
		<Wrapper>
			<p className="number">
				Question : {questionNumber} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{" "}
				{answers.map((obj) => (
					<ButtonWrapper
						key={obj}
						correct={userAnswer?.correctAnswer === obj}
						userClicked={userAnswer?.answer === obj}
					>
						{" "}
						<button
							disabled={userAnswer ? true : false}
							value={obj}
							onClick={callback}
						>
							<span dangerouslySetInnerHTML={{ __html: obj }} />
						</button>
					</ButtonWrapper>
				))}{" "}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
