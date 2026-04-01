import s from './Progress.module.sass';

interface Props {
  title: string;
  value: number;
  totalValue: number;
}

export function Progress({ title, value, totalValue }: Props) {
  return (
    <div className={s.Progress}>
      <div className={s.ProgressWrapper}>
        <h2 className={s.ProgressTitle}>{title}</h2>
        <output className={s.ProgressValue}>
          {value}/{totalValue}
        </output>
      </div>
      <div className={s.ProgressBar}>
        <div
          className={s.ProgressLine}
          style={{ width: value / (totalValue / 100) + '%' }}
        ></div>
      </div>
    </div>
  );
}
