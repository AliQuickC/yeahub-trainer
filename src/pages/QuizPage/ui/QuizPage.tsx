import { Progress } from '../../../shared/ui/Progress/Progress';
import { RequestErrorMessage } from '../../../shared/ui/RequestErrorMessage/RequestErrorMessage';
import { Skeleton } from '../../../shared/ui/Skeleton/Skeleton';
import { Quiz } from '../../../widgets/quiz';
import { useQuiz } from '../../../app/store/useAppSelector';
import { useGetQuizQuery } from '../../../entities/questions';
import { QuizNavButton } from '../../../features/quiz-nav';
import { RezultButton } from '../../../features/rezultbutton';
import { ExitButton } from '../../../features/exitbutton';

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

  const { quiz, progressValue, currentQuestion, totalQuestions, questions } =
    useQuiz();

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
            progressValue={progressValue}
            currentValue={currentQuestion}
            totalValue={totalQuestions}
          />
          <Quiz
            quizData={quiz}
            prevButton={<QuizNavButton type={'prev'} />}
            nextButton={<QuizNavButton type={'next'} />}
            finishButton={
              currentQuestion >= totalQuestions &&
              questions[totalQuestions - 1].isKnow !== null ? (
                <RezultButton />
              ) : (
                <ExitButton />
              )
            }
          />
        </>
      )}
    </>
  );
}
