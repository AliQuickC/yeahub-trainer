import { useNavigate } from 'react-router-dom';
import { Button } from '../../../shared/ui/Button/Button';
import { CompletedQuestions } from '../../../widgets/questions';

export function ResultPage() {
  const navigate = useNavigate();

  const returnHandler = () => {
    navigate('/quiz/new', { replace: true });
  };

  return (
    <>
      <CompletedQuestions />
      <Button title={'Новое собеседование'} onClick={returnHandler} />
    </>
  );
}
