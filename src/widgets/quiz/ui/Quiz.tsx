import s from './Quiz.module.sass';
import { Button } from '../../../shared/ui/Button/Button';
import { NavButton } from '../../../shared/ui/NavButton/NavButton';
import { useActions } from '../../../app/store/useActions';
import { useNavigate } from 'react-router-dom';
import { QuizQuestion } from '../../../entities/questions';
import type { QuizQuestionType } from '../../../entities/questions/model/types';

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
  const navigate = useNavigate();
  const { navigateToQuestion } = useActions();

  const nextQuestionHandler = () => {
    if (
      currentQuestion < totalQuestions &&
      questions[currentQuestion - 1].isKnow !== null
    ) {
      navigateToQuestion(currentQuestion + 1);
    }
  };

  const prevQuestionHandler = () => {
    if (currentQuestion > 1) {
      navigateToQuestion(currentQuestion - 1);
    }
  };

  const exitHandler = () => {
    navigate('/quiz/new', { replace: true });
  };

  const toRezultHandler = () => {
    navigate('/rezult', { replace: true });
  };

  return (
    <div className={s.Quiz}>
      <div className={s.NavButtonsWrapper}>
        <NavButton
          title="< Назад"
          disable={currentQuestion <= 1}
          onClick={prevQuestionHandler}
        />
        <NavButton
          title="Далее >"
          disable={
            currentQuestion >= totalQuestions ||
            questions[currentQuestion - 1].isKnow === null
          }
          onClick={nextQuestionHandler}
        />
      </div>

      <QuizQuestion
        question={questions[currentQuestion - 1]}
        currentQuestion={currentQuestion}
      />

      <hr />

      {currentQuestion >= totalQuestions &&
      questions[totalQuestions - 1].isKnow !== null ? (
        <Button title={'Проверить'} onClick={toRezultHandler} />
      ) : (
        <Button
          title={'Завершить'}
          onClick={exitHandler}
          style={{
            color: '#F3164E',
            backgroundColor: '#FDD8E1',
            alignSelf: 'flex-end',
          }}
        />
      )}
    </div>
  );
}
