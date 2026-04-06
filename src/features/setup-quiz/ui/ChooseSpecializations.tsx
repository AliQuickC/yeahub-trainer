import type { FiltersType } from '../../../entities/questions';
import type { SpecializationsResponseData } from '../../../entities/specializations';
import { useUrlSelectedFilters } from '../../../shared/lib/hooks/useUrlSelectedFilters';
import { FilterGroup } from '../../../shared/ui/FilterGroup/FilterGroup';

const filterType: FiltersType = 'specializations';

interface Props {
  data: SpecializationsResponseData[];
}
export function ChooseSpecializations({ data }: Props) {
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
