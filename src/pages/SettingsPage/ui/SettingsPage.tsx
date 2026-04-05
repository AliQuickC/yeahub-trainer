import s from './SettingsPage.module.sass';
import { Button } from '../../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../app/store/useActions';
import { specializationsDafault } from '../../../shared/const/const';
import type { QuizParams } from '../../../entities/questions/model/types';
import { QuestionsFilters } from '../../../widgets/questions';
import { useUrlSelectedFilters } from '../../../shared/lib/hooks/useUrlSelectedFilters';

export function SettingsPage() {
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
    <section className={s.FiltersSection}>
      <h2>Собеседование</h2>
      <QuestionsFilters />
      <div className={s.StartButton}>
        <Button title={'Начать →'} onClick={startQuizHandler} />
      </div>
    </section>
  );
}
