import s from './QuestionsLimit.module.sass';
import { quizLimitDefault } from '../../../../shared/const/const';
import { useUrlSelectedFilters } from '../../../../shared/lib/hooks/useUrlSelectedFilters';
import type { FiltersType } from '../../../../entities/questions';

const filterType: FiltersType = 'limit';

export function QuestionsLimit() {
  const [limit, setLimit] = useUrlSelectedFilters(filterType);

  const changeLimitHandler = (value: string) => {
    const limit = Number(value);
    if (Number.isInteger(limit) && limit > 0) {
      setLimit(value);
    }
  };

  return (
    <input
      className={s.Count}
      type="number"
      name=""
      min="1"
      max="50"
      value={limit[0] || quizLimitDefault}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        changeLimitHandler(event.target.value);
      }}
    />
  );
}
