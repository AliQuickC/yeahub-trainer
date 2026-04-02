import s from './LikeButton.module.sass';

interface Props {
  title: string;
  сhecked?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}

export function LikeButton({ title, сhecked = false, icon, onClick }: Props) {
  return (
    <button
      className={s.LikeButton + (сhecked ? ` ${s.LikeButtonChecked}` : '')}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
}

interface Props {
  title: string;
}
