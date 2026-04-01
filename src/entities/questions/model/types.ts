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
