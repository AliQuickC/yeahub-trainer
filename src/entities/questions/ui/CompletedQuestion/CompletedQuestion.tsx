import { DislikeIcon, LikeIcon } from '../../../../shared/assets';
import type { QuizQuestion } from '../../model/types';
import s from './CompletedQuestion.module.sass';

interface Props {
  question: QuizQuestion;
}

export function CompletedQuestion({ question }: Props) {
  return (
    <div className={s.CompletedQuestion}>
      <div className={s.CompletedQuestionImage}></div>
      <div className={s.CompletedQuestionWrap}>
        <div className={s.QuestionTitle}>{question.title}</div>
        <div className={question.isKnow ? s.QuestionKnow : s.QuestionUnknow}>
          {question.isKnow ? <LikeIcon /> : <DislikeIcon />}
          {question.isKnow ? 'Знаю' : 'Не знаю'}
        </div>
      </div>
    </div>
  );
}
