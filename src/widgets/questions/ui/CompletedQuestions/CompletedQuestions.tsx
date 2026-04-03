import { useQuiz } from '../../../../app/store/useAppSelector';
import { CompletedQuestion } from '../../../../entities/questions/ui/CompletedQuestion/CompletedQuestion';
import s from './CompletedQuestions.module.sass';

export function CompletedQuestions() {
  const { quiz } = useQuiz();

  return (
    <section className={s.CompletedQuestions}>
      <h3 className={s.CompletedQuestionsTitle}>
        Список пройденных вопросов собеседования
      </h3>
      <div className={s.QuestionsList}>
        {quiz.questions.map((item) => (
          <CompletedQuestion key={item.id} question={item} />
        ))}
      </div>
    </section>
  );
}
