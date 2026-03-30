import s from './SettingsPage.module.sass';
import { Filters } from '../../../widgets/questions';

export function SettingsPage() {
  return (
    <div className="container">
      <section className={s.FiltersSection}>
        <h2>Собеседование</h2>
        <Filters />
      </section>
    </div>
  );
}
