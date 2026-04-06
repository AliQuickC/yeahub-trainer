import { useNavigate } from 'react-router-dom';
import s from './ReturnButton.module.sass';

export function ReturnButton() {
  const navigate = useNavigate();

  const returnHandler = () => {
    navigate('/quiz/new', { replace: true });
  };

  return (
    <button className={s.Button} onClick={returnHandler}>
      {'Новое собеседование'}
    </button>
  );
}
