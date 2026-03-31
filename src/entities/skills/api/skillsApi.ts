import baseApi from '../../../app/baseApi';
import type { SkillsParamsType, SkillsResponse } from '../model/types';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkillsList: builder.query<SkillsResponse, SkillsParamsType>({
      query: (params) => {
        const { limit = '65', specializations } = params || {};
        return {
          url: 'skills',
          params: {
            limit,
            specializations,
          },
        };
      },
      providesTags: ['Skills'],
    }),
  }),
});

export const { useGetSkillsListQuery } = skillsApi;
