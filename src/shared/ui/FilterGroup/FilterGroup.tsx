import { useState } from 'react';
import { ExpandButton } from '../SwitchButton/ExpandButton';
import s from './FilterGroup.module.sass';
import type { FilterItemList } from '../../../entities/questions/model/FilterTypes';

const checkedTitle = 'Посмотреть все';
const uncheckedTitle = 'Скрыть';

interface Props {
  data: FilterItemList;
  selectedItems: string[];
  haveExpandButton?: boolean;
  selectParamHandler: (id: string) => void;
}

export function FilterGroup({
  data,
  selectedItems,
  haveExpandButton,
  selectParamHandler,
}: Props) {
  const [hidden, setHidden] = useState<boolean>(true);

  const filtersList = data.map((item) => {
    const isSelected = selectedItems.includes(item.id.toString());
    return (
      <div
        key={item.id}
        className={s.ListItem + (isSelected ? ` ${s.ActiveListItem}` : '')}
        onClick={() => selectParamHandler(item.id.toString())}
      >
        {item.title}
      </div>
    );
  });

  const ExpandHandler = () => {
    setHidden((value) => !value);
  };

  return (
    <div>
      <div className={s.FilterList + ` ${hidden ? s.FilterHidden : ''}`}>
        {filtersList}
      </div>
      {haveExpandButton ? (
        <ExpandButton
          checkedTitle={checkedTitle}
          uncheckedTitle={uncheckedTitle}
          checked={hidden}
          ExpandHandler={ExpandHandler}
        />
      ) : null}
    </div>
  );
}
