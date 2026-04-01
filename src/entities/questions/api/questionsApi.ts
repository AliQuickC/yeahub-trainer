import baseApi from '../../../app/baseApi';
import type { QuizParamsType, QuizResponse } from '../model/types';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizResponse, QuizParamsType>({
      query: (params) => {
        const {
          limit,
          skills,
          complexity,
          specializations,
        } = params || {};
        return {
          url: 'interview-preparation/quizzes/mock/new',
          params: {
            specializations,
            limit,
            skills,
            complexity,
          },
        };
      },
      providesTags: ['questions'],
    }),
  }),
});

export const { useGetQuizQuery } = questionsApi;
