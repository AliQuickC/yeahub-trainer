import s from './Quiz.module.sass';
import { Button } from '../../../shared/ui/Button/Button';
import type { QuizQuestion } from '../../../entities/questions/model/types';
import { NavButton } from '../../../shared/ui/NavButton/NavButton';
import { ExpandButton } from '../../../shared/ui/SwitchButton/ExpandButton';
import { useState } from 'react';
import { LikeButton } from '../../../shared/ui/LikeButton/LikeButton';
import { DislikeIcon, LikeIcon } from '../../../shared/assets';
import { useActions } from '../../../app/store/useActions';
import { useNavigate } from 'react-router-dom';

interface Props {
  quizData: {
    questions: QuizQuestion[];
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
  const [hiddenAnswer, setHiddenAnswer] = useState<boolean>(true);
  const { changeQuestion, setKhow } = useActions();

  const hiddenHandler = () => {
    setHiddenAnswer((value) => !value);
  };

  const nextQuestionHandler = () => {
    if (
      currentQuestion < totalQuestions &&
      questions[currentQuestion - 1].isKnow !== null
    ) {
      changeQuestion(currentQuestion + 1);
    }
  };

  const prevQuestionHandler = () => {
    if (currentQuestion > 1) {
      changeQuestion(currentQuestion - 1);
    }
  };

  const notKnowHandler = () => {
    setKhow({ isKnow: false, questionNamber: currentQuestion });
  };

  const knowHandler = () => {
    setKhow({ isKnow: true, questionNamber: currentQuestion });
  };

  const exitHandler = () => {
    navigate('/quiz/new', { replace: true });
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

      <p className={s.QuestionTitle}>{questions[currentQuestion - 1].title}</p>

      {hiddenAnswer ? null : (
        <div
          className={s.Answer}
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion - 1].shortAnswer,
          }}
        ></div>
      )}

      <ExpandButton
        checkedTitle={'Посмотреть ответ'}
        uncheckedTitle={'Скрыть ответ'}
        checked={hiddenAnswer}
        ExpandHandler={hiddenHandler}
      />

      <div className={s.AnswerButtonsWrapper}>
        {
          <>
            <LikeButton
              title={'Не знаю'}
              icon={<DislikeIcon />}
              сhecked={questions[currentQuestion - 1].isKnow === false}
              onClick={notKnowHandler}
            />
            <LikeButton
              title={'Знаю'}
              icon={<LikeIcon />}
              сhecked={questions[currentQuestion - 1].isKnow === true}
              onClick={knowHandler}
            />
          </>
        }
      </div>

      <hr />

      {currentQuestion >= totalQuestions &&
      questions[totalQuestions - 1].isKnow !== null ? (
        <Button title={'Проверить'} onClick={() => {}} />
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
