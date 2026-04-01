import s from './NavButton.module.sass';

interface Props {
  title: string;
  disable?: boolean;
}

export function NavButton({ title, disable }: Props) {
  return (
    <button className={s.NavButton + (disable ? ` ${s.NavButtonDisable}` : '')}>
      {title}
    </button>
  );
}
