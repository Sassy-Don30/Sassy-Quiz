import { shuffleArray } from "./utils";

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & {
	answers: string[];
};

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&types=multiple`;
	const data = await (await fetch(endPoint)).json();
	return data.results.map((obj: Question) => ({
		...obj,
		answers: shuffleArray([...obj.incorrect_answers, obj.correct_answer]),
	}));
};
