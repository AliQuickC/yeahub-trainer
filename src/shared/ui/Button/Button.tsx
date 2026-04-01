import s from './Button.module.sass';

interface Props {
  title: string;
  clickHandler: () => void;
  style?: React.CSSProperties;
}

export function Button({ title, clickHandler, style }: Props) {
  return (
    <button className={s.Button} onClick={clickHandler} style={style}>
      {title}
    </button>
  );
}
