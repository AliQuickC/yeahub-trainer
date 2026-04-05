import type { SkillsResponseData } from '../../skills';
import type { SpecializationsResponseData } from '../../specializations';

export type QuestionsResponseData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
};

export interface QuizResponse {
  fullCount: number;
  startDate: string;
  questions: QuestionsResponseData[];
  response: {
    answers: { questionId: number; questionTitle: string; answer?: string }[];
  };
  skills?: string[];
}

export type QuizParamsType = {
  specializations: string;
  skills?: string;
  complexity?: string;
  limit?: string;
};

export type QuizQuestionType = Pick<
  QuestionsResponseData,
  'id' | 'title' | 'shortAnswer'
> & {
  isKnow: boolean | null;
  isHiddenAnswer: boolean;
};

export interface QuizParams {
  specializations: string;
  skills?: string;
  complexity?: string;
  limit?: string;
}

type ComplexityIds = '1,2,3' | '4,5,6' | '7,8' | '9,10';

export type FiltersType = 'specializations' | 'skills' | 'complexity' | 'limit';

export type ComplexityData = { id: ComplexityIds; title: string };

export type FilterItemList =
  | SpecializationsResponseData[]
  | SkillsResponseData[]
  | ComplexityData[];
