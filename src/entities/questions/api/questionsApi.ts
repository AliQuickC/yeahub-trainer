import baseApi from '../../../app/baseApi';
import type { QuizParamsType, QuizResponse } from '../model/types';
import { actions as quizActions } from '../model/quizSlice';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizResponse, QuizParamsType>({
      query: (params) => {
        const { limit, skills, complexity, specializations } = params || {};
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

      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; // Ждем завершения запроса
          dispatch(quizActions.startQuiz(data));
        } catch (error) {
          console.error('Ошибка при получении пользователя:', error);
        }
      },
      providesTags: ['questions'],
    }),
  }),
});

export const { useGetQuizQuery } = questionsApi;
