import { Text } from '../../../UI/Text';

import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import { useEffect, useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';


const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'Топ', Icon: TopIcon },
  { value: 'Лучшие', Icon: BestIcon },
  { value: 'Горячие', Icon: HotIcon },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  let [tabValue, setTabValue] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);

    handleResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>

      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {tabValue}
            <ArrowIcon width={14} height={14} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({ value, id, Icon }) => (
            <Text As='li' className={style.item} fontWeight='medium' key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setTabValue({ tabValue } = value);
                }}>
                {value}
                {Icon && <Icon width={22} height={22} />}
              </button>
            </Text>
          ))}
        </ul>
      )}

    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};