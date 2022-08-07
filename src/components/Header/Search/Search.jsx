import style from './Search.module.css';
import { ReactComponent as ImgSearch } from './img/search.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchRequest } from '../../../store/search/searchAction';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRequest(search));
    navigate(`/searched/search`);
  };

  return (
    <form
      className={style.form}
      onSubmit={
        handleSubmit
      }>
      <input
        className={style.search}
        type="search"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button
        className={style.button}
        type='submit'
      >
        <ImgSearch className={style.svg} />
      </button>
    </form >
  );
};
