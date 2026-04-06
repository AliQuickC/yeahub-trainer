import s from './RezultButton.module.sass';
import { useNavigate } from 'react-router-dom';

export function RezultButton() {
  const navigate = useNavigate();

  const toRezultHandler = () => {
    navigate('/rezult', { replace: true });
  };

  return (
    <button className={s.Button} onClick={toRezultHandler}>
      {'Проверить'}
    </button>
  );
}
