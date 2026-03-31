import type { SkillsResponseData } from '../../../entities/skills/model/types';
import { useSelectedFilters } from '../../../shared/hooks/useSelectedFilters';
import { FilterGroup } from '../../../shared/ui/FilterGroup/FilterGroup';
import type { FiltersType } from '../../../entities/questions/model/FilterTypes';

const filterType: FiltersType = 'skills';

interface Props {
  data: SkillsResponseData[];
}
export function SkillsFilterList({ data }: Props) {
  const [selectedItems, setSelectedItems] = useSelectedFilters(filterType);

  const selectParamHandler = (id: string) => {
    setSelectedItems(id);
  };

  return (
    <div>
      <FilterGroup
        data={data}
        selectedItems={selectedItems}
        selectParamHandler={selectParamHandler}
      />
    </div>
  );
}
