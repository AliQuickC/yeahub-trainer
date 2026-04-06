import s from './FinishButton.module.sass';
import { useNavigate } from 'react-router-dom';

export function FinishButton() {
  const navigate = useNavigate();

  const finishHandler = () => {
    navigate('/quiz/new', { replace: true });
  };

  return (
    <button className={s.Button} onClick={finishHandler}>
      {'Завершить'}
    </button>
  );
}
