import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { specializationsDafault } from '../../../shared/const/const';

export interface QuizParams {
  specializations: string;
  skills?: string;
  complexity?: string;
  limit?: string;
}

interface State {
  quizParams: QuizParams;
  quiz: {
    currentQuestion: number;
  };
}

const initialState: State = {
  quizParams: {
    specializations: specializationsDafault,
  },
  quiz: {
    currentQuestion: 1,
  },
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<QuizParams>) => {
      state.quizParams = action.payload;
      state.quiz.currentQuestion = 1;
    },
    setQuiz: (
      state,
      action: PayloadAction<{ key: string; value: string | number }>
    ) => {
      const { key, value } = action.payload;
      state.quiz = { ...state.quiz, [key]: value };
    },
  },
});

export const actions = quizSlice.actions;

export default quizSlice.reducer;
