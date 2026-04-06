import s from './Quiz.module.sass';
import { QuizQuestion } from '../../../entities/questions';
import type { QuizQuestionType } from '../../../entities/questions/model/types';
import type { JSX } from 'react';

interface Props {
  quizData: {
    questions: QuizQuestionType[];
    currentQuestion: number;
    totalQuestions: number;
  };
  prevButton: JSX.Element;
  nextButton: JSX.Element;
  finishButton: JSX.Element;
}

export function Quiz({
  quizData: { questions },
  quizData: { currentQuestion },
  prevButton,
  nextButton,
  finishButton,
}: Props) {
  return (
    <div className={s.Quiz}>
      <div className={s.NavButtonsWrapper}>
        {prevButton}
        {nextButton}
      </div>
      <QuizQuestion
        question={questions[currentQuestion - 1]}
        currentQuestion={currentQuestion}
      />
      <hr />
      {finishButton}
    </div>
  );
}
