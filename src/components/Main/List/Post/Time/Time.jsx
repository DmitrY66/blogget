import style from './Time.module.css';
import formatDate from '../../../../../utils/formatDate';
import { postData } from '../../../../../data';

export const Time = () => {
  const { date } = postData;

  return (
    <time
      className={style.date}
      dateTime={date}>{formatDate(date)}
    </time>
  );
};
