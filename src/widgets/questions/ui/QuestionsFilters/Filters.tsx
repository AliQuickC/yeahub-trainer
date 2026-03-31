import s from './Filters.module.sass';
import { useGetSpecializationsListQuery } from '../../../../entities/specializations/api/specializationsApi';
import { useGetSkillsListQuery } from '../../../../entities/skills/api/skillsApi';
import { Loader } from '../../../../shared/ui/Loader/Loader';
import { RequestErrorMessage } from '../../../../shared/ui/RequestErrorMessage/RequestErrorMessage';
import { SpecializationsFilterList } from '../../../../features/specializations';
import { SkillsFilterList } from '../../../../features/skills';
import { ComplexityList } from '../../../../features/complexity';
import { CountInput } from '../../../../shared/ui/CountInput/CountInput';
import { useSelectedFilters } from '../../../../shared/hooks/useSelectedFilters';
import { useEffect } from 'react';

const reactSpecializationId = '11';

export function Filters() {
  const [selectedSpecializations, setSelectedSpecializations] =
    useSelectedFilters('specializations');
  const [, , clearSelectedSkills] = useSelectedFilters('skills');

  const selectedSpecialization = selectedSpecializations[0];
  useEffect(() => {
    if (selectedSpecializations.length === 0) {
      setSelectedSpecializations(reactSpecializationId);
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
            <SpecializationsFilterList data={specializationsData.data} />
          )}
        </div>

        <div className={s.Skills}>
          <h4>Категории вопросов</h4>
          {skillsLoading ? (
            <Loader width="100px" height="70px" />
          ) : skillsIsError || !skillsData ? (
            <RequestErrorMessage />
          ) : (
            <SkillsFilterList data={skillsData.data} />
          )}
        </div>
      </div>

      <div className={s.FiltersWraper}>
        <div className={s.Complexity}>
          <h4>Уровень сложности</h4>
          <ComplexityList />
        </div>

        <div className={s.QuestionCount}>
          <h4>Количество вопросов</h4>
          <CountInput />
        </div>
      </div>
    </div>
  );
}
