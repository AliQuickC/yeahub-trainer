import s from './Quiz.module.sass';
import { QuizNavButton } from '../../../features/quiz-nav/ui/QuizNavButton';
import { QuizQuestion } from '../../../entities/questions';
import type { QuizQuestionType } from '../../../entities/questions/model/types';
import { FinishButton } from '../../../features/finishbutton';
import { RezultButton } from '../../../features/rezultbutton';

interface Props {
  quizData: {
    questions: QuizQuestionType[];
    currentQuestion: number;
    totalQuestions: number;
  };
}

export function Quiz({
  quizData: { totalQuestions },
  quizData: { questions },
  quizData: { currentQuestion },
}: Props) {
  return (
    <div className={s.Quiz}>
      <div className={s.NavButtonsWrapper}>
        <QuizNavButton type={'prev'} />
        <QuizNavButton type={'next'} />
      </div>

      <QuizQuestion
        question={questions[currentQuestion - 1]}
        currentQuestion={currentQuestion}
      />

      <hr />

      {currentQuestion >= totalQuestions &&
      questions[totalQuestions - 1].isKnow !== null ? (
        <RezultButton />
      ) : (
        <FinishButton />
      )}
    </div>
  );
}
