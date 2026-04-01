import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
  quizParams: {
    specializations: string;
    skills?: string;
    complexity?: string;
    limit?: number;
    currentQuestion: number;
  };
}

const initialState: State = {
  quizParams: {
    specializations: '11',
    currentQuestion: 1
  },
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setParams: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.quizParams = { ...state.quizParams, [key]: value };
    },
  },
});

export const actions = quizSlice.actions;

export default quizSlice.reducer;
