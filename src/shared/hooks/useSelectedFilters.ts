import { useSearchParams } from 'react-router-dom';
import { urlDecode } from '../utility/url-code';
import type { FiltersType } from '../../entities/questions/model/FilterTypes';

export const useSelectedFilters = (
  type: FiltersType
): [string[], (id: string) => void, () => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected: string | null = searchParams.get(type);

  const paramsSingleSelect = (id: string) => {
    setSearchParams((searchParams) => {
      searchParams.set(type, id.toString());
      return searchParams;
    });
  };

  const paramsMultipleSelect = (newParamValue: string) => {
    setSearchParams((searchParams) => {
      const oldParamsValue = searchParams.get(type);

      if (oldParamsValue === null) {
        searchParams.set(type, newParamValue);
      } else {
        const existingParameters = oldParamsValue.split(',');

        const selectParamIndex = existingParameters.indexOf(newParamValue);
        if (selectParamIndex === -1) {
          existingParameters.push(newParamValue);
          searchParams.set(type, existingParameters.join(','));
        } else if (existingParameters.length === 1) {
          searchParams.delete(type);
        } else {
          existingParameters.splice(selectParamIndex, 1);
          searchParams.set(type, existingParameters.join(','));
        }
      }
      return searchParams;
    });
  };

  const clearSelected = () => {
    setSearchParams((searchParams) => {
      searchParams.delete(type);
      return searchParams;
    });
  };

  const setSelectedItems = (id: string) => {
    if (type === 'specializations') {
      paramsSingleSelect(id);
    } else {
      paramsMultipleSelect(id);
    }
  };

  let selectedItems: string[] = [];
  if (selected === null) {
    selectedItems = [];
  } else if (type === 'skills' || type === 'rate') {
    selectedItems = selected.split(',');
  } else if (type === 'complexity') {
    selectedItems = selected.split(',').map((item) => urlDecode(item));
  } else {
    selectedItems.push(selected);
  }

  return [selectedItems, setSelectedItems, clearSelected];
};
