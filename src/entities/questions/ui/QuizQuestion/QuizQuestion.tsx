import s from './QuizQuestion.module.sass';
import { ExpandButton } from '../../../../shared/ui/SwitchButton/ExpandButton';
import type { QuizQuestionType } from '../../model/types';
import { LikeButton } from '../../../../shared/ui/LikeButton/LikeButton';
import { DislikeIcon, LikeIcon } from '../../../../shared/assets';
import { useActions } from '../../../../app/store/useActions';

interface Props {
  question: QuizQuestionType;
  currentQuestion: number;
}

export function QuizQuestion({ question, currentQuestion }: Props) {
  const { setKhow, setHidden } = useActions();

  const hiddenHandler = () => {
    setHidden({
      isHiddenAnswer: !question.isHiddenAnswer,
      questionNamber: currentQuestion,
    });
  };

  const notKnowHandler = () => {
    setKhow({ isKnow: false, questionNamber: currentQuestion });
  };

  const knowHandler = () => {
    setKhow({ isKnow: true, questionNamber: currentQuestion });
  };

  return (
    <>
      <div>
        <p className={s.QuestionTitle}>{question.title}</p>

        {question.isHiddenAnswer ? null : (
          <div
            className={s.Answer}
            dangerouslySetInnerHTML={{
              __html: question.shortAnswer,
            }}
          ></div>
        )}

        <ExpandButton
          checkedTitle={'Посмотреть ответ'}
          uncheckedTitle={'Скрыть ответ'}
          checked={question.isHiddenAnswer}
          ExpandHandler={hiddenHandler}
        />
      </div>

      <div className={s.AnswerButtonsWrapper}>
        {
          <>
            <LikeButton
              title={'Не знаю'}
              icon={<DislikeIcon />}
              сhecked={question.isKnow === false}
              onClick={notKnowHandler}
            />
            <LikeButton
              title={'Знаю'}
              icon={<LikeIcon />}
              сhecked={question.isKnow === true}
              onClick={knowHandler}
            />
          </>
        }
      </div>
    </>
  );
}
