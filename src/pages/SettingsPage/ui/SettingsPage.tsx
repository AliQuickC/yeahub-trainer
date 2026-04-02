import s from './SettingsPage.module.sass';
import { Filters } from '../../../widgets/questions';
import { Button } from '../../../shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelectedFilters } from '../../../shared/hooks/useSelectedFilters';
import { useActions } from '../../../app/store/useActions';
import { specializationsDafault } from '../../../shared/const/const';
import type { QuizParams } from '../../../entities/questions/model/types';

export function SettingsPage() {
  const navigate = useNavigate();
  const [specializations] = useSelectedFilters('specializations');
  const [skills] = useSelectedFilters('skills');
  const [complexity] = useSelectedFilters('complexity');
  const [limit] = useSelectedFilters('limit');
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
      <div className={s.SettingContainer + ' container'}>
        <h2>Собеседование</h2>
        <Filters />
        <div className={s.FiltersSectionButton}>
          <Button title={'Начать →'} onClick={startQuizHandler} />
        </div>
      </div>
    </section>
  );
}
