import type {
  ComplexityData,
  FiltersType,
} from '../../../entities/questions/model/FilterTypes';
import { FilterGroup } from '../../../shared/ui/FilterGroup/FilterGroup';
import { useSelectedFilters } from '../../../shared/hooks/useSelectedFilters';
import { urlCode } from '../../../shared/utility/url-code';

const filterType: FiltersType = 'complexity';

const data: ComplexityData[] = [
  { id: '1,2,3', title: '1-3' },
  { id: '4,5,6', title: '4-6' },
  { id: '7,8', title: '7-8' },
  { id: '9,10', title: '9-10' },
];

export function ComplexityList() {
  const [selectedItems, setSelectedItems] = useSelectedFilters(filterType);

  const selectParamHandler = (id: string) => {
    setSelectedItems(urlCode(id));
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
