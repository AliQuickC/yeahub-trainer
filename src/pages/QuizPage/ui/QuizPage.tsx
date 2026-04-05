import { Progress } from '../../../shared/ui/Progress/Progress';
import { RequestErrorMessage } from '../../../shared/ui/RequestErrorMessage/RequestErrorMessage';
import { Skeleton } from '../../../shared/ui/Skeleton/Skeleton';
import { Quiz } from '../../../widgets/quiz';
import { useQuiz } from '../../../app/store/useAppSelector';
import { useGetQuizQuery } from '../../../entities/questions';

export function QuizPage() {
  const { specializations, skills, complexity, limit } = useQuiz();

  const { data, isLoading, isError } = useGetQuizQuery(
    {
      specializations,
      skills,
      complexity,
      limit,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { quiz } = useQuiz();

  return (
    <>
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
            progressValue={quiz.progressValue}
            currentValue={quiz.currentQuestion}
            totalValue={quiz.totalQuestions}
          />
          <Quiz quizData={quiz} />
        </>
      )}
    </>
  );
}
