import type { SpecializationsResponseData } from '../../../../entities/specializations/model/types';
import { useSelectedFilters } from '../../../../shared/hooks/useSelectedFilters';
import { FilterGroup } from '../../../../shared/ui/FilterGroup/FilterGroup';
import type { FiltersType } from '../../../../entities/questions/model/FilterTypes';

const filterType: FiltersType = 'specializations';

interface Props {
  data: SpecializationsResponseData[];
}
export function SpecializationsFilterList({ data }: Props) {
  const [selectedSpecializations, setSelectedSpecializations] =
    useSelectedFilters(filterType);

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
