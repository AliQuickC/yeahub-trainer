import s from './LikeButton.module.sass';

interface Props {
  title: string;
  сhecked?: boolean;
  icon?: React.ReactNode;
}

export function LikeButton({ title, сhecked = false, icon }: Props) {
  return (
    <button
      className={s.LikeButton + (сhecked ? ` ${s.LikeButtonChecked}` : '')}
    >
      {icon}
      {title}
    </button>
  );
}

interface Props {
  title: string;
}
