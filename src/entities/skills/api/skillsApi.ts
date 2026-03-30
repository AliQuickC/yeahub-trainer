import baseApi from '../../../app/baseApi';
import type { SkillsParamsType, SkillsResponse } from '../model/types';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getskillsList: builder.query<SkillsResponse, SkillsParamsType>({
      query: (params) => {
        const { limit = '65' } = params || {};
        return {
          url: 'skills',
          params: {
            limit,
          },
        };
      },
      providesTags: ['Skills'],
    }),
  }),
});

export const { useGetskillsListQuery } = skillsApi;
