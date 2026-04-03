import { CompletedQuestions, SmartModePanel } from '../../../widgets/questions';
import s from './ResultPage.module.sass';

export function ResultPage() {
  return (
    <div className={s.RezultContainer + ' container'}>
      <SmartModePanel />
      <CompletedQuestions />
    </div>
  );
}
