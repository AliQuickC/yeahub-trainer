import { combineReducers } from '@reduxjs/toolkit/react';
import baseApi from '../baseApi';
import quizSlice from '../../entities/questions/model/quizSlice';

export const rootReducer = combineReducers({
  quiz: quizSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
