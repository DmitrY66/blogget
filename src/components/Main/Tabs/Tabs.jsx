import { Text } from '../../../UI/Text';
import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { assignId } from '../../../utils/generateRandomId';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';
import { useNavigate } from 'react-router-dom';


const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [itemMenu, setItemMenu] = useState('Главная');
  // const [after, setAfter] = useState(useSelector(state => state.postsReducer.after));
  const navigate = useNavigate();

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

  // let after = useSelector(state => state.postsReducer.after);
  // console.log('after: ', after);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {itemMenu}
            <ArrowIcon width={14} height={14} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({ value, link, id, Icon }) => (
            <Text As='li' className={style.item} fontWeight='medium' key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  // setItemMenu({ itemMenu } = value);
                  // setAfter('');
                  setItemMenu(value);
                  navigate(`/category/${link}`);
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
