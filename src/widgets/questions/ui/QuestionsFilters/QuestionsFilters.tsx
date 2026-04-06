import s from './QuestionsFilters.module.sass';
import { Loader } from '../../../../shared/ui/Loader/Loader';
import { RequestErrorMessage } from '../../../../shared/ui/RequestErrorMessage/RequestErrorMessage';
import { useEffect } from 'react';
import { specializationsDafault } from '../../../../shared/const/const';
import { QuestionsLimit } from '../../../../features/questions';
import { useUrlSelectedFilters } from '../../../../shared/lib/hooks/useUrlSelectedFilters';
import { useGetSpecializationsListQuery } from '../../../../entities/specializations';
import { useGetSkillsListQuery } from '../../../../entities/skills';
import {
  ChooseComplexity,
  ChooseSkills,
  ChooseSpecializations,
} from '../../../../features/setup-quiz';

export function QuestionsFilters() {
  const [selectedSpecializations, setSelectedSpecializations] =
    useUrlSelectedFilters('specializations');
  const [, , clearSelectedSkills] = useUrlSelectedFilters('skills');

  const selectedSpecialization = selectedSpecializations[0];
  useEffect(() => {
    if (selectedSpecializations.length === 0) {
      setSelectedSpecializations(specializationsDafault);
    } else {
      clearSelectedSkills();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSpecialization]);

  const {
    data: specializationsData,
    isLoading: specializationIsLoading,
    isError: specializationIsError,
  } = useGetSpecializationsListQuery({});

  const {
    data: skillsData,
    isLoading: skillsLoading,
    isError: skillsIsError,
  } = useGetSkillsListQuery({ specializations: selectedSpecializations?.[0] });

  return (
    <div className={s.Filters}>
      <div className={s.FiltersWraper}>
        <div className={s.Specializations}>
          <h4>Выбор специализация</h4>
          {specializationIsLoading ? (
            <Loader width="100px" height="70px" />
          ) : specializationIsError || !specializationsData ? (
            <RequestErrorMessage />
          ) : (
            <ChooseSpecializations data={specializationsData.data} />
          )}
        </div>

        <div className={s.Skills}>
          <h4>Категории вопросов</h4>
          {skillsLoading ? (
            <Loader width="100px" height="70px" />
          ) : skillsIsError || !skillsData ? (
            <RequestErrorMessage />
          ) : (
            <ChooseSkills data={skillsData.data} />
          )}
        </div>
      </div>

      <div className={s.FiltersWraper}>
        <div className={s.Complexity}>
          <h4>Уровень сложности</h4>
          <ChooseComplexity />
        </div>

        <div className={s.QuestionCount}>
          <h4>Количество вопросов</h4>
          <QuestionsLimit />
        </div>
      </div>
    </div>
  );
}
