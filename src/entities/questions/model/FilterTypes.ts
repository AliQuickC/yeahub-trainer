import type { SkillsResponseData } from '../../skills/model/types';
import type { SpecializationsResponseData } from '../../specializations/model/types';

type ComplexityIds = '1,2,3' | '4,5,6' | '7,8' | '9,10';

export type FiltersType = 'specializations' | 'skills' | 'complexity' | 'limit';

export type ComplexityData = { id: ComplexityIds; title: string };

export type FilterItemList =
  | SpecializationsResponseData[]
  | SkillsResponseData[]
  | ComplexityData[];
