import s from './CountInput.module.sass';

export function CountInput() {
  return (
    <div>
      <input
        className={s.Count}
        type="number"
        name=""
        min="1"
        max="50"
        defaultValue={'1'}
      />
    </div>
  );
}
