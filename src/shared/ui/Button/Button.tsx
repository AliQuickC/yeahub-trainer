import s from './Button.module.sass';

interface Props {
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function Button({ title, onClick, style }: Props) {
  return (
    <button className={s.Button} onClick={onClick} style={style}>
      {title}
    </button>
  );
}
