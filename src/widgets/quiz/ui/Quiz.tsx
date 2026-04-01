import s from './Quiz.module.sass';
import { Button } from '../../../shared/ui/Button/Button';
import type { QuestionsResponseData } from '../../../entities/questions/model/types';
import { NavButton } from '../../../shared/ui/NavButton/NavButton';
import { ExpandButton } from '../../../shared/ui/SwitchButton/ExpandButton';
import { useState } from 'react';
import { LikeButton } from '../../../shared/ui/LikeButton/LikeButton';
import { DislikeIcon, LikeIcon } from '../../../shared/assets';

interface Props {
  questions: QuestionsResponseData[];
}

export function Quiz({ questions }: Props) {
  const [hiddenAnswer, setHiddenAnswer] = useState<boolean>(true);

  const hiddenHandler = () => {
    setHiddenAnswer((value) => !value);
  };

  return (
    <div className={s.Quiz}>
      <div className={s.NavButtonsWrapper}>
        <NavButton title="< Назад" disable />
        <NavButton title="Далее >" />
      </div>
      <p className={s.QuestionTitle}>{questions[1].title}</p>

      {hiddenAnswer ? null : (
        <div
          className={s.Answer}
          dangerouslySetInnerHTML={{ __html: questions[1].shortAnswer }}
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
            <LikeButton title={'Не знаю'} icon={<DislikeIcon />} />
            <LikeButton title={'Знаю'} icon={<LikeIcon />} сhecked />
          </>
        }
      </div>
      <hr />
      <Button
        title={'Завершить'}
        clickHandler={() => {}}
        style={{
          color: '#F3164E',
          backgroundColor: '#FDD8E1',
          alignSelf: 'flex-end',
        }}
      />

      <Button title={'Проверить'} clickHandler={() => {}} />
    </div>
  );
}
