import s from './Skeleton.module.sass';

interface Props {
  count?: number;
  style?: React.CSSProperties;
}
export function Skeleton({ count = 1, style }: Props) {
  return (
    <div className={s.List}>
      {[...Array(count)].map((_, index) => (
        <div key={index} className={s.Item} style={style}></div>
      ))}
    </div>
  );
}
