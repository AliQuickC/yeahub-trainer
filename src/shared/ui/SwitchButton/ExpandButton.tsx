import s from './ExpandButton.module.sass';

interface Props {
  checked: boolean;
  checkedTitle: string;
  uncheckedTitle: string;
  ExpandHandler: () => void;
}
export function ExpandButton({
  checked,
  checkedTitle,
  uncheckedTitle,
  ExpandHandler,
}: Props) {
  return (
    <button className={s.SwitchButton} onClick={ExpandHandler}>
      {checked ? checkedTitle : uncheckedTitle}
    </button>
  );
}
