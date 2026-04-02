import s from './NavButton.module.sass';

interface Props {
  title: string;
  disable?: boolean;
  onClick: () => void;
}

export function NavButton({ title, disable, onClick }: Props) {
  return (
    <button
      className={s.NavButton + (disable ? ` ${s.NavButtonDisable}` : '')}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
