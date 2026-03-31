import s from './Button.module.sass';

interface Props {
  title: string;
  clickHandler: () => void;
}

export function Button({ title, clickHandler }: Props) {
  return (
    <button
      className={s.Button}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}
