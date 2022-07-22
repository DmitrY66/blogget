import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate.js';
import { postData } from '../../../../../data';

export const Date = () => {
  const { date } = postData;
  console.log(formatDate(date));
  return (
    <time
      className={style.date}
      dateTime={date}>{formatDate(date)}
    </time>
  );
};
