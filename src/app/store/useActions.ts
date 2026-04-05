import { useDispatch } from 'react-redux';
import { actions as quizActions } from '../../entities/questions';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit/react';

const rootActions = {
  ...quizActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
