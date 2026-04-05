import s from './QuizRezultQuestion.module.sass';
import { DislikeIcon, LikeIcon } from '../../../../shared/assets';
import type { QuizQuestionType } from '../../model/types';

interface Props {
  question: QuizQuestionType;
}

export function QuizRezultQuestion({ question }: Props) {
  return (
    <div className={s.RezultQuestion}>
      <div className={s.RezultQuestionImage}></div>
      <div className={s.RezultQuestionWrap}>
        <div className={s.QuestionTitle}>{question.title}</div>
        <div className={question.isKnow ? s.QuestionKnow : s.QuestionUnknow}>
          {question.isKnow ? <LikeIcon /> : <DislikeIcon />}
          {question.isKnow ? 'Знаю' : 'Не знаю'}
        </div>
      </div>
    </div>
  );
}
