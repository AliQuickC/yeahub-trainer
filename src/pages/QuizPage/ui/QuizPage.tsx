import s from './QuizPage.module.sass';
import { useGetQuizQuery } from '../../../entities/questions/api/questionsApi';
import { Progress } from '../../../shared/ui/Progress/Progress';
import { RequestErrorMessage } from '../../../shared/ui/RequestErrorMessage/RequestErrorMessage';
import { Skeleton } from '../../../shared/ui/Skeleton/Skeleton';
import { Quiz } from '../../../widgets/quiz';
import { useQuiz } from '../../../app/store/useAppSelector';

export function QuizPage() {
  const { specializations, skills, complexity, limit } = useQuiz();

  const { data, isLoading, isError } = useGetQuizQuery({
    specializations,
    skills,
    complexity,
    limit,
  });

  return (
    <>
      <div className={s.QuizContainer + ' container'}>
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton style={{ height: '400px' }} />
          </>
        ) : isError || !data ? (
          <RequestErrorMessage />
        ) : (
          <>
            <Progress
              title={'Вопросы собеседования'}
              value={1}
              totalValue={data.fullCount}
            />
            <Quiz questions={data.questions} />
          </>
        )}
      </div>
    </>
  );
}
