import { CountInput } from '../../../shared/ui/CountInput/CountInput';
import { useSelectedFilters } from '../../../shared/hooks/useSelectedFilters';
import type { FiltersType } from '../../../entities/questions/model/FilterTypes';
import { quizLimitDefault } from '../../../shared/const/const';

const filterType: FiltersType = 'limit';

export function Limit() {
  const [limit, setLimit] = useSelectedFilters(filterType);

  const changeLimitHandler = (value: string) => {
    const limit = Number(value);
    if (Number.isInteger(limit) && limit > 0) {
      setLimit(value);
    }
  };

  return (
    <div>
      <CountInput
        value={limit[0] || quizLimitDefault}
        setValue={changeLimitHandler}
      />
    </div>
  );
}
