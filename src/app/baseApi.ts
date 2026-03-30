import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../shared/const/const';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Specializations', 'Skills'],
  endpoints: () => ({}),
});

export default baseApi;
