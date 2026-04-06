import { FilterGroup } from '../../../shared/ui/FilterGroup/FilterGroup';
import { useUrlSelectedFilters } from '../../../shared/lib/hooks/useUrlSelectedFilters';
import type { FiltersType } from '../../../entities/questions';
import type { SkillsResponseData } from '../../../entities/skills';

const filterType: FiltersType = 'skills';

interface Props {
  data: SkillsResponseData[];
}
export function ChooseSkills({ data }: Props) {
  const [selectedItems, setSelectedItems] = useUrlSelectedFilters(filterType);

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
