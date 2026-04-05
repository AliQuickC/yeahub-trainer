import type { SpecializationsResponseData } from '../../../../entities/specializations/model/types';
import { FilterGroup } from '../../../../shared/ui/FilterGroup/FilterGroup';
import { useUrlSelectedFilters } from '../../../../shared/lib/hooks/useUrlSelectedFilters';
import type { FiltersType } from '../../../../entities/questions';

const filterType: FiltersType = 'specializations';

interface Props {
  data: SpecializationsResponseData[];
}
export function SpecializationsFilterList({ data }: Props) {
  const [selectedSpecializations, setSelectedSpecializations] =
    useUrlSelectedFilters(filterType);

  const selectParamHandler = (id: string) => {
    setSelectedSpecializations(id);
  };

  return (
    <div>
      <FilterGroup
        data={data}
        selectedItems={selectedSpecializations}
        haveExpandButton
        selectParamHandler={selectParamHandler}
      />
    </div>
  );
}
