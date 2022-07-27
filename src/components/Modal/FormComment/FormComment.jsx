import { useRef } from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
  const inputRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
