import s from './QuizNavButton.module.sass';
import { useActions } from '../../../app/store/useActions';
import { useQuiz } from '../../../app/store/useAppSelector';

interface Props {
  type: 'prev' | 'next';
}

export function QuizNavButton({ type }: Props) {
  const { navigateToQuestion } = useActions();
  const { totalQuestions, questions, currentQuestion } = useQuiz();

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

  const disable =
    type === 'prev'
      ? currentQuestion <= 1
      : currentQuestion >= totalQuestions ||
        questions[currentQuestion - 1].isKnow === null;

  return (
    <button
      className={s.NavButton + (disable ? ` ${s.NavButtonDisable}` : '')}
      onClick={type === 'prev' ? prevQuestionHandler : nextQuestionHandler}
    >
      {type === 'prev' ? '< Назад' : 'Далее >'}
    </button>
  );
}
