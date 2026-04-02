import s from './Progress.module.sass';

interface Props {
  title: string;
  progressValue: number;
  currentValue: number;
  totalValue: number;
}

export function Progress({
  title,
  progressValue,
  currentValue,
  totalValue,
}: Props) {
    const progressLine = progressValue / (totalValue / 100);

  return (
    <div className={s.Progress}>
      <div className={s.ProgressWrapper}>
        <h2 className={s.ProgressTitle}>{title}</h2>
        <output className={s.ProgressValue}>
          {currentValue}/{totalValue}
        </output>
      </div>
      <div className={s.ProgressBar}>
        <div
          className={s.ProgressLine}
          style={{ width: progressLine + '%' }}
        ></div>
      </div>
    </div>
  );
}
