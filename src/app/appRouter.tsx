import { createBrowserRouter, replace } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { NotFound } from "../pages/NotFoundPage";
import { SettingsPage } from "../pages/SettingsPage";
import { QuizPage } from "../pages/QuizPage";
import { ResultPage } from '../pages/ResultPage';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        loader: () => replace('/quiz/new'),
      },
      { path: '/quiz/new', element: <SettingsPage /> },
      { path: '/quiz', element: <QuizPage /> },
      { path: '/rezult', element: <ResultPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);




