import s from './ExitButton.module.sass';
import { useNavigate } from 'react-router-dom';

export function ExitButton() {
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
