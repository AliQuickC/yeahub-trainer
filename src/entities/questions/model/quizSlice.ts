import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { specializationsDafault } from '../../../shared/const/const';
import type { QuizParams, QuizQuestion, QuizResponse } from './types';

interface State {
  quizIsStart: boolean;
  quizParams: QuizParams;
  quiz: {
    totalQuestions: number;
    currentQuestion: number;
    progressValue: number;
    questions: QuizQuestion[];
  };
}

const initialState: State = {
  quizIsStart: false,
  quizParams: {
    specializations: specializationsDafault,
  },
  quiz: {
    totalQuestions: 1,
    currentQuestion: 1,
    progressValue: 0,
    questions: [],
  },
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizParams: (state, action: PayloadAction<QuizParams>) => {
      state.quizParams = action.payload;
    },

    startQuiz: (state, action: PayloadAction<QuizResponse>) => {
      const qiuzQuestions = action.payload.questions.map((item) => ({
        id: item.id,
        title: item.title,
        shortAnswer: item.shortAnswer,
        isKnow: null,
      }));

      state.quiz.currentQuestion = 1;
      state.quiz.totalQuestions = action.payload.fullCount;
      state.quiz.questions = qiuzQuestions;
      state.quizIsStart = true;
    },
    changeQuestion: (state, action: PayloadAction<number>) => {
      state.quiz.currentQuestion = action.payload;
    },
    setKhow: (
      state,
      action: PayloadAction<{ isKnow: boolean; questionNamber: number }>
    ) => {
      state.quiz.questions[action.payload.questionNamber - 1].isKnow =
        action.payload.isKnow;
      if (action.payload.questionNamber > state.quiz.progressValue) {
        state.quiz.progressValue = action.payload.questionNamber;
      }
    },
  },
});

export const actions = quizSlice.actions;

export default quizSlice.reducer;
