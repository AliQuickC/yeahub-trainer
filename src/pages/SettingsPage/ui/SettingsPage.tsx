import s from './SettingsPage.module.sass';
import { QuestionsFilters } from '../../../widgets/questions';
import { StartButton } from '../../../features/startbutton';

export function SettingsPage() {
  return (
    <section className={s.FiltersSection}>
      <QuestionsFilters />
      <StartButton />
    </section>
  );
}
