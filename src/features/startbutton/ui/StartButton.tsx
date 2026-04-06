import s from './StartButton.module.sass';
import { useNavigate } from 'react-router-dom';
import { useUrlSelectedFilters } from '../../../shared/lib/hooks/useUrlSelectedFilters';
import { useActions } from '../../../app/store/useActions';
import type { QuizParams } from '../../../entities/questions';
import { specializationsDafault } from '../../../shared/const/const';

export function StartButton() {
  const navigate = useNavigate();
  const [specializations] = useUrlSelectedFilters('specializations');
  const [skills] = useUrlSelectedFilters('skills');
  const [complexity] = useUrlSelectedFilters('complexity');
  const [limit] = useUrlSelectedFilters('limit');
  const { setQuizParams } = useActions();

  const startQuizHandler = () => {
    const quizParams: QuizParams = {
      specializations:
        specializations.length === 0
          ? specializationsDafault
          : specializations[0],
      skills: skills.length === 0 ? undefined : skills.join(','),
      complexity: complexity.length === 0 ? undefined : complexity.join(','),
      limit: limit ? limit[0] : undefined,
    };

    setQuizParams(quizParams);
    navigate('/quiz', { replace: true });
  };

  return (
    <button className={s.Button} onClick={startQuizHandler}>
      {'Начать →'}
    </button>
  );
}
