import s from './CountInput.module.sass';

interface Props {
  value: string;
  setValue: (newValue: string) => void;
}

export function CountInput({ value, setValue }: Props) {
  return (
    <div>
      <input
        className={s.Count}
        type="number"
        name=""
        min="1"
        max="50"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
