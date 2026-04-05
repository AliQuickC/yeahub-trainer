import s from './RezultQuizList.module.sass';
import { useQuiz } from '../../../../app/store/useAppSelector';
import { QuizRezultQuestion } from '../../../../entities/questions';

export function RezultQuizList() {
  const { quiz } = useQuiz();

  return (
    <section className={s.RezultQuestions}>
      <h3 className={s.RezultQuestionsTitle}>
        Список пройденных вопросов собеседования
      </h3>
      <ul className={s.QuestionsList}>
        {quiz.questions.map((item) => (
          <li key={item.id}>
            <QuizRezultQuestion question={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
