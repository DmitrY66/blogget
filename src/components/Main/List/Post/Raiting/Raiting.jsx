import style from './Raiting.module.css';
import {postData} from '../../../../../data';

export const Raiting = () => {
  const { ups } = postData;

  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг' />
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг' />
    </div>
  );
};
