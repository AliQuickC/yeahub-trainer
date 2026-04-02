import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './appStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useQuiz = () => {
  const { quizParams, quiz } = useAppSelector((state) => state.quiz);
  const { specializations, skills, complexity, limit } = quizParams;

  return { quizParams, quiz, specializations, skills, complexity, limit };
};
