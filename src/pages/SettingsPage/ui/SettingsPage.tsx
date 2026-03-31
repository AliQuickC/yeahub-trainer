import s from './SettingsPage.module.sass';
import { Filters } from '../../../widgets/questions';
import { Button } from '../../../shared/ui/StartButton/Button';

export function SettingsPage() {
  return (
    <section className={s.FiltersSection}>
      <div className={s.SettingContainer + ' container'}>
        <h2>Собеседование</h2>
        <Filters />
        <div className={s.FiltersSectionButton}>
          <Button title={'Начать →'} clickHandler={() => {}} />
        </div>
      </div>
    </section>
  );
}
